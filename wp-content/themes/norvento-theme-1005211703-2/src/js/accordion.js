'use strict'

export default class Videos {
  constructor () {
    this.config = {

  }
    this.itemsGroups = document.querySelectorAll('.accordion')
  }

  accordionHandler (item) {

    let headingLink = item.querySelectorAll("[data-toggle='collapse']");
    headingLink.forEach((item, i) => {
      item.addEventListener('click',openAccordion)
    });

    function openAccordion(param) {
      var currentHeading = param.currentTarget;
    	var dataTarget = param.currentTarget.dataset.target;
    	var currentContent = item.querySelector(dataTarget);
    	var collapseDiv = item.querySelectorAll('.collapse');
      console.log(currentContent);
      if (!currentContent.classList.contains('show')) {
        currentHeading.classList.remove('collapsed');
        currentContent.classList.add('show');
      } else {
        currentHeading.classList.add('collapsed');
        currentContent.classList.remove('show');

      }
    	// headingLink.forEach(function(cp) {
    	// 	// cp.classList.add('collapsed');
    	// });
    	// currentHeading.classList.remove('collapsed');
      //
      // collapseDiv.forEach(function(cd) {
      // 	// cd.classList.remove('show');
      // });
      // 	currentContent.classList.add('show');
      }

  }

  init () {

    if (this.itemsGroups.length > 0) {

      this.itemsGroups.forEach((item, i) => {
        this.accordionHandler(item)
      });

    }

  }
}
