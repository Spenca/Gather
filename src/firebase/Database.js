import * as firebase from 'firebase';
import GatheringStore from './../GatheringStore';

class Database {

	static addGathering(gathering) {
		let myRef = firebase.database().ref().child('Gatherings').push();
		let myKey = myRef.key;

		//TODO: set real gathering data

		myRef.set(gathering);
	}

	static setListener() {
		var ref = firebase.database().ref("testName");
		firebase.database().ref().on('value', function(snapshot) {
			GatheringStore.updateGatherings(snapshot);
		});
	}
}

module.exports = Database;