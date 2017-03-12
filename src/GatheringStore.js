import {EventEmitter} from 'events';

var emitter = new EventEmitter();

var gatherings = [];

module.exports = {
	getGatherings() {
		return gatherings;
	},

	subscribe(callback) {
		emitter.addListener('update', callback);
	},

	unsubscribe(callback) {
		emitter.removeListener('update', callback);
	},

	addGathering(gathering) {
		gatherings.push(gathering);
		emitter.emit('update');
	}
}