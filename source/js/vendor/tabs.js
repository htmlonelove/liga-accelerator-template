export class Tabs {
  constructor() {
    this._windowWidth = window.innerWidth;
    this._documentClickHandler = this._documentClickHandler.bind(this);
    this._init();
  }

  _init() {
    this._initAllTabs();
    document.addEventListener('click', this._documentClickHandler);
  }

  _resizeObserver() {
    return new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target.classList.contains('is-active')) {
          this._updateTabHeight();
        }
      }
    });
  }

  _documentClickHandler(evt) {
    const target = evt.target;
    if (!target.closest('[data-tabs="control"]')) {
      return;
    }
    evt.preventDefault();
    const control = target.closest('[data-tabs="control"]');
    this.openTab(control);
  }

  _initAllTabs() {
    const tabs = document.querySelectorAll('[data-tabs="parent"]');
    const forLoadTabs = document.querySelectorAll('[data-tabs="element"].for-load');
    tabs.forEach((tab) => {
      this._initTab(tab);
    });
    forLoadTabs.forEach((tab) => {
      tab.classList.remove('for-load');
    });
  }

  _removeAllActiveClasses(tabControlElements, tabElements) {
    tabElements.forEach((tab) => {
      tab.classList.remove('is-active');
    });

    tabControlElements.forEach((element, index) => {
      element.classList.remove('is-active');
      element.setAttribute('data-index', index);
    });
  }

  _setTabStartState(tab, dataHeight, tabElements, tabContentElement, tabControlElements, dataDelay) {
    const activeIndex = this._returnActiveIndex(tabControlElements);
    const blockHeight = dataHeight === 'max' ? this._returnMaxHeight(tabElements) : tabElements[activeIndex].offsetHeight;
    this._removeAllActiveClasses(tabControlElements, tabElements);
    tab.classList.add('no-transition');
    tabControlElements[activeIndex].classList.add('is-active');
    tabElements[activeIndex].classList.add('is-active');
    if (dataHeight !== 'unset') {
      tabContentElement.style.height = `${blockHeight}px`;
    }
    setTimeout(() => {
      if (dataDelay) {
        tab.classList.remove('no-transition');
      }
    }, dataDelay);
  }

  _returnActiveIndex(tabControlElements) {
    let activeIndex = 0;
    let flag = true;
    tabControlElements.forEach((control, index) => {
      if (control.classList.contains('is-active') && flag) {
        activeIndex = index;
        flag = false;
      }
    });
    return activeIndex;
  }

  _returnMaxHeight(tabElements) {
    let height = [];
    tabElements.forEach((element) => {
      height.push(element.offsetHeight);
    });
    height.sort((a, b) => a - b);
    return height[height.length - 1];
  }

  _returnScopeList(nodeList, parent) {
    const array = [];
    nodeList.forEach((element) => {
      const elementParent = element.closest('[data-tabs="parent"]');
      if (elementParent === parent) {
        array.push(element);
      }
    });

    return array;
  }

  _returnScopeChild(nodeList, parent) {
    let currentChild;
    nodeList.forEach((element) => {
      const elementParent = element.closest('[data-tabs="parent"]');
      if (elementParent === parent) {
        currentChild = element;
      }
    });

    return currentChild;
  }

  _updateTabHeight() {
    const activeElements = document.querySelectorAll('[data-tabs="element"].is-active');
    activeElements.forEach((element) => {
      let transition = false;
      const parent = element.closest('[data-tabs="parent"]');
      if (parent.closest('[data-tabs="element"]')) {
        transition = true;
      }
      this._setTabElementHeight(element, transition);
    });
  }

  _setTabElementHeight(element, transition) {
    const parentElement = element.closest('[data-tabs="parent"]');
    const dataHeight = parentElement.dataset.height;
    const contentElement = this._returnScopeChild(parentElement.querySelectorAll('[data-tabs="content"]'), parentElement);
    const tabElements = this._returnScopeList(parentElement.querySelectorAll('[data-tabs="element"]'), parentElement);

    if (!transition) {
      parentElement.classList.add('no-transition');
    }

    if (dataHeight === 'max') {
      contentElement.style.height = `${this._returnMaxHeight(tabElements)}px`;
    } else if (dataHeight === 'unset') {
      contentElement.style.height = null;
    } else {
      contentElement.style.height = `${this._returnScopeChild(parentElement.querySelectorAll('[data-tabs="element"].is-active'), parentElement).offsetHeight}px`;
    }

    setTimeout(() => parentElement.classList.remove('no-transition'));
  }

  _initTab(tab) {
    const dataHeight = tab.dataset.height;
    const dataDelay = tab.dataset.delay ? tab.dataset.delay : 0;
    const tabContentElement = tab.querySelector('[data-tabs="content"]');
    const tabControlElements = this._returnScopeList(tab.querySelectorAll('[data-tabs="control"]'), tab);
    const tabElements = this._returnScopeList(tab.querySelectorAll('[data-tabs="element"]'), tab);
    this._setTabStartState(tab, dataHeight, tabElements, tabContentElement, tabControlElements, dataDelay);
    if (dataHeight !== 'unset') {
      tabElements.forEach((element) => {
        this._resizeObserver().observe(element);
      });
    }
    setTimeout(() => {
      tab.classList.remove('no-transition-global');
    });
  }

  reInit() {
    this._initAllTabs();
  }

  openTab(control) {
    const currentIndex = control.dataset.index;
    const parentElement = control.closest('[data-tabs="parent"]');

    if (control.classList.contains('is-active') || parentElement.classList.contains('no-action')) {
      return;
    }

    const dataDelay = parentElement.dataset.delay ? parentElement.dataset.delay : 0;
    const dataHeight = parentElement.dataset.height;
    const contentElement = parentElement.querySelector('[data-tabs="content"]');
    const tabElements = this._returnScopeList(parentElement.querySelectorAll('[data-tabs="element"]'), parentElement);

    const activeControl = this._returnScopeChild(parentElement.querySelectorAll('[data-tabs="control"].is-active'), parentElement);
    const activeElement = this._returnScopeChild(parentElement.querySelectorAll('[data-tabs="element"].is-active'), parentElement);
    const currentHeight = contentElement.offsetHeight;
    const newHeight = tabElements[currentIndex].offsetHeight;

    parentElement.classList.add('no-action');
    document.activeElement.blur();

    if (activeControl) {
      activeControl.classList.remove('is-active');
    }

    if (activeElement) {
      activeElement.classList.remove('is-active');
    }

    if (currentHeight > newHeight) {
      setTimeout(() => {
        if (dataHeight !== 'max' && dataHeight !== 'unset') {
          contentElement.style.height = newHeight + 'px';
        }
        control.classList.add('is-active');
        tabElements[currentIndex].classList.add('is-active');
        parentElement.classList.remove('no-action');
      }, dataDelay);
    } else {
      if (dataHeight !== 'max' && dataHeight !== 'unset') {
        contentElement.style.height = newHeight + 'px';
      }
      setTimeout(() => {
        control.classList.add('is-active');
        tabElements[currentIndex].classList.add('is-active');
        parentElement.classList.remove('no-action');
      }, dataDelay);
    }
  }
}
