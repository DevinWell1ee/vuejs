import Vue from 'vue'
import {numberToLetter} from './to-letter.js'

Vue.filter('numberToLetter', numberToLetter)