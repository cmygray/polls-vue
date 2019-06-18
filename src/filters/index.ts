import Vue from 'vue';

import { formatTimestamp } from './format-timestamp';

Vue.filter('dateTime', formatTimestamp);
