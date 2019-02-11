"use strict";

function crazy() {
    const vm = this;
    vm.words = [
        "bottle",
        "ramen",
        "hairbursh",
        "chocolate milk",
        "cricket",
    ]
    vm.phrase = [
        "This meme is dank",
        "All right, all right, ALL RIGHT",
        "Let's get tubular",
        "LUNK SEASON!",
        "wuz good wit it",
    ]
    vm.class = [
        "bold",
        "blue",
        "big",
        "underline",
        "default"
    ]
    
    vm.list = [];
    vm.addword = function() {
        vm.list.push(angular.copy({
            text: vm.words[Math.floor(Math.random() * 5) + 0],
            class: vm.class[4]
        }))
    }
    vm.addwordstyles = function () {
        vm.list.push(angular.copy({
            text: vm.words[Math.floor(Math.random() * 5) + 0],
            class: vm.getRandomStyle()
        }))
    }
    vm.addphrase = function () {
        vm.list.push(angular.copy({
            text: vm.phrase[Math.floor(Math.random() * 5) + 0],
            class: vm.class[4]
        }))

    }
    vm.addphrasestyle = function () {
        vm.list.push(angular.copy({
            text: vm.phrase[Math.floor(Math.random() * 5) + 0],
            class: vm.getRandomStyle()
        }))

    }
    vm.getRandomStyle = function (){
        return vm.class[Math.floor(Math.random() * 5) + 0]
    }
}
angular.module("app").controller("crazy", crazy)