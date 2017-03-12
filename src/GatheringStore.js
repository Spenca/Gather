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
	},

	updateGatherings(snapshot) {
		gatherings = [];
		snapshot.child("Gatherings").forEach(child => {
			gatherings.push(child.val());
		})
		emitter.emit('update');
	}
}