class studentHogwarts {
	constructor() {
		this.privateScore = 0;
		this.name = null;
	}

	changeScoreBy = function (points) {
		this.privateScore += points;
	};

	setName = function (newName) {
		this.name = newName;
	};

	rewardStudent = function () {
		this.changeScoreBy(1);
	};

	penalizeStudent = function () {
		this.changeScoreBy(-1);
	};

	getScore = function () {
		return this.name + ': ' + this.privateScore;
	};
}

harry = new studentHogwarts();
harry.setName('harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());