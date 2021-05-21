'use strict'

export default class Videos {
  constructor () {
    this.config = {

  }
    this.tabsGroups = document.querySelectorAll('.tabs-group')
  }

  tabsHandler (item) {

  	// store tabs variable
  	var myTabs = item.querySelectorAll(".tab-item");

    function myTabClicks(tabClickEvent) {
  		for (var i = 0; i < myTabs.length; i++) {
  			myTabs[i].classList.remove("active");
  		}
  		var clickedTab = tabClickEvent.currentTarget;
  		clickedTab.classList.add("active");
  		tabClickEvent.preventDefault();
  		var myContentPanes = item.querySelectorAll(".tab-pane");
  		for (i = 0; i < myContentPanes.length; i++) {
  			myContentPanes[i].classList.remove("active");
  		}
  		var anchorReference = tabClickEvent.target;
  		var activePaneId = anchorReference.getAttribute("href");
  		var activePane = item.querySelector(activePaneId);
  		activePane.classList.add("active");
  	}

  	for (let i = 0; i < myTabs.length; i++) {
  		myTabs[i].addEventListener("click", myTabClicks)
  	}


  }

  init () {

    if (this.tabsGroups.length > 0) {

      this.tabsGroups.forEach((item, i) => {
        this.tabsHandler(item)
      });


    }
    // this.sliderHero()
    //       this.slider()
    // document.addEventListener("DOMContentLoaded", function(event) {
    //   console.log("DOM fully loaded and parsed");
    //
    // });
  }
}
