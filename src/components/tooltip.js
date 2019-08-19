class Tooltip {
  constructor() {
    this.fragment = document.createDocumentFragment();
    this.vpTooltipElement = document.querySelectorAll('[data-vp-tooltip]');
    this.initCreateTooltipElements();
  }

  initCreateTooltipElements() {
    this.vpTooltipElement.forEach((element) => {
      const vptooltipMessage = element.dataset.vpTooltipMessage;
      const vptooltipPosition = element.dataset.vpTooltipPosition;
      if(vptooltipMessage !== '' && vptooltipPosition !== '') {
        this.initTooltipMessageElement(element);
      }
    });
    document.body.appendChild(this.fragment);
    this.vpTooltipElement.forEach((tooltipElement) => {
      const tooltipMessageWrapper = tooltipElement.dataset.vpTooltipid;
      const messageWrapperElement = document.getElementById(tooltipMessageWrapper);
      tooltipElement.addEventListener('mouseover', () => {
        this.getTooltipPosition(messageWrapperElement, tooltipElement);
      });
      tooltipElement.addEventListener('mouseout', () => {
        this.resetTooltipMessagePosition(messageWrapperElement);
      }); 
    });
  }

  initTooltipMessageElement(tooltipElement) {
    const vptooltipMessage = tooltipElement.dataset.vpTooltipMessage;
    const tooltipPosition = tooltipElement.dataset.vpTooltipPosition;
    
    const tooltipMessageWrapper = document.createElement('div');
    tooltipMessageWrapper.id = tooltipElement.dataset.vpTooltipid;
    const tooltipChild = document.createElement('div');
    tooltipChild.className = 'vp-tooltip-message';
    this.hideTooltip(tooltipMessageWrapper);
    tooltipMessageWrapper.className = 'vp-tooltip';
    tooltipMessageWrapper.appendChild(tooltipChild);
    tooltipChild.appendChild(document.createTextNode(vptooltipMessage));
    this.fragment.appendChild(tooltipMessageWrapper);
  }

  showTooltip(tooltipMessageWrapper) {
    tooltipMessageWrapper.style.visibility = 'visible';
  }

  hideTooltip(tooltipMessageWrapper) {
    tooltipMessageWrapper.style.visibility = 'hidden';
  }

  getTooltipPosition(tooltipMessageWrapper, tooltipElement) {
    const currentTooltipPosition = tooltipElement.getBoundingClientRect();
    const messagePosition = tooltipMessageWrapper.getBoundingClientRect();
    console.log("currentTooltipPosition: ", currentTooltipPosition);
    console.log("MessagePosition: ", messagePosition);
    const {top, left} = this.generateTooltipMessagePosition(
      currentTooltipPosition,
      messagePosition,
      tooltipElement.dataset.vpTooltipPosition
    );
    tooltipMessageWrapper.style.top = `${top}px`;
    tooltipMessageWrapper.style.left = `${left}px`;
    tooltipMessageWrapper.style.visibility = 'visible';
  }

  generateTooltipMessagePosition(currentTooltipElementPosition, tooltipMessagePosition, tooltipAttributePosition) {
    switch (tooltipAttributePosition) {
      case 'bottom':
        const tooltipBottom = currentTooltipElementPosition.top + (currentTooltipElementPosition.height);
        return { 
          top: tooltipBottom,
          left: currentTooltipElementPosition.left
        }
      case 'left':
        const tooltipLeft = currentTooltipElementPosition.left - (tooltipMessagePosition.width);
        return {
          top: currentTooltipElementPosition.top,
          left: tooltipLeft
        }
      case 'right':
        const tooltipRight = currentTooltipElementPosition.left + (currentTooltipElementPosition.width);
        return {
          top: currentTooltipElementPosition.top,
          left: tooltipRight
        }
      default:
        // default is top
        const tooltipTop = currentTooltipElementPosition.top - (tooltipMessagePosition.height);
        return { 
          top: tooltipTop, 
          left: currentTooltipElementPosition.left 
        }
    }
  }

  resetTooltipMessagePosition(tooltipMessageWrapper) {
    tooltipMessageWrapper.style.top = '0';
    tooltipMessageWrapper.style.left = '0';
    this.hideTooltip(tooltipMessageWrapper);
  }
}

window.Tooltip = Tooltip;

export default Tooltip;