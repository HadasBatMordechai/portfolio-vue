import { describe, it, expect } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import AppNav from '/src/components/AppNav.vue';
import NavList from '/src/components/NavList.vue';

describe('AppNav (navigation)', () => {
  it('should render the AppNav component successfully', () => {
    const wrapper = mount(AppNav);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('div.fixed').exists()).toBe(true);
  });

  it('should display the hamburger icon when the Popover is initially closed', () => {
    const wrapper = mount(AppNav);
    expect(wrapper.find('[aria-label="Close navbar"]').exists()).toBe(false);
    expect(wrapper.findAll('span[aria-label="Open navbar"]').length).toBe(3);
  });

  it('should display the close icon (X) when the Popover is open', async () => {
    const wrapper = mount(AppNav);
    const popoverButton = wrapper.findComponent({ name: 'PopoverButton' });

    console.log('HTML before click:', wrapper.html());

    await popoverButton.trigger('click');

    // נסה את זה: המתן לכל ה-Promises הממתינים להתיישב
    await flushPromises();
    // וגם: תן ל-Vue טיק נוסף ליתר ביטחון
    await wrapper.vm.$nextTick();

    console.log(
      'HTML after click (with flushPromises and nextTick):',
      wrapper.html(),
    );

    // ודא שאייקון ה-X קיים
    expect(wrapper.find('[aria-label="Close navbar"]').exists()).toBe(true);
    // ודא שמוטות ההמבורגר אינם קיימים
    expect(wrapper.findAll('span[aria-label="Open navbar"]').length).toBe(0);
  });

  // 4. בדיקת פתיחה וסגירה של ה-Popover
  it.skip('should open and close the Popover on PopoverButton click', async () => {
    const wrapper = mount(AppNav);
    const popoverButton = wrapper.findComponent({ name: 'PopoverButton' });

    // בהתחלה, PopoverPanel לא אמור להיות קיים ב-DOM (כך Headless UI פועל)
    expect(wrapper.findComponent({ name: 'PopoverPanel' }).exists()).toBe(
      false,
    );

    // לחיצה ראשונה - פותח את ה-Popover
    await popoverButton.trigger('click');
    await wrapper.vm.$nextTick(); // ממתין ל-DOM להתעדכן

    // ודא שה-PopoverPanel קיים וגלוי
    const popoverPanel = wrapper.findComponent({ name: 'PopoverPanel' });
    expect(popoverPanel.exists()).toBe(true);
    // Headless UI משתמש ב-display: none עבור transition, אז isVisible אמור לעבוד כשהוא פתוח
    expect(popoverPanel.isVisible()).toBe(true);

    // לחיצה שנייה - סוגר את ה-Popover
    await popoverButton.trigger('click');
    await wrapper.vm.$nextTick(); // ממתין ל-DOM להתעדכן

    // ודא שה-PopoverPanel שוב אינו קיים ב-DOM
    expect(wrapper.findComponent({ name: 'PopoverPanel' }).exists()).toBe(
      false,
    );
  });

  // 5. בדיקת סגירת ה-Popover כאשר NavList פולט אירוע 'clicked'
  it.skip('should close Popover when NavList inside it emits "clicked"', async () => {
    const wrapper = mount(AppNav);
    const popoverButton = wrapper.findComponent({ name: 'PopoverButton' });

    // 1. פותח את ה-Popover
    await popoverButton.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent({ name: 'PopoverPanel' }).exists()).toBe(true);

    // 2. מוצא את קומפוננטת ה-NavList בתוך ה-PopoverPanel
    // נשתמש ב-shallowMount כדי למנוע רינדור מלא של NavList ולבודד את AppNav,
    // אך עבור בדיקת אינטראקציה פנימית עדיף mount מלא במקרה זה.
    const navListInPopover = wrapper.findComponent(NavList);

    // 3. מדמה פליטת אירוע 'clicked' מקומפוננטת NavList
    await navListInPopover.vm.$emit('clicked');
    await wrapper.vm.$nextTick(); // ממתין ל-Vue לסיים לעדכן את ה-DOM

    // 4. ודא שה-PopoverPanel נסגר (אינו קיים יותר ב-DOM)
    expect(wrapper.findComponent({ name: 'PopoverPanel' }).exists()).toBe(
      false,
    );
  });

  // 6. בדיקת העברת Class לקומפוננטת NavList בתוך ה-Popover
  it.skip('should pass "text-center" class to NavList inside PopoverPanel', async () => {
    const wrapper = mount(AppNav);
    await wrapper.findComponent({ name: 'PopoverButton' }).trigger('click'); // פותח את הפופאובר
    await wrapper.vm.$nextTick();

    const navListInPopover = wrapper.findComponent(NavList);
    expect(navListInPopover.exists()).toBe(true);
    expect(navListInPopover.classes()).toContain('text-center');
  });

  // 7. בדיקת העברת Class לקומפוננטת NavList הרגילה (מחוץ לפופאובר)
  it('should pass "flex justify-center" classes to the regular NavList', () => {
    const wrapper = mount(AppNav);
    // ודא שאתה מוצא את ה-NavList הנכון (זה שבתוך ה-<nav> הנסתר במסכים קטנים)
    const regularNavList = wrapper
      .find('nav.hidden.md\\:block')
      .findComponent(NavList);
    expect(regularNavList.exists()).toBe(true);
    expect(regularNavList.classes()).toContain('flex');
    expect(regularNavList.classes()).toContain('justify-center');
  });
});
