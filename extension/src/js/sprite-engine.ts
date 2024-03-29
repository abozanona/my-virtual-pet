type SpriteEngineOptions = {
	selector?: string;
};

export enum SpriteDirection {
	LEFT,
	RIGHT,
}

type SpriteStatus = {
	isSleeping: boolean;
	playerLevel: number;
	playerLevelProgress: number;
	happinessLevel: number;
	satedLevel: number;
	energyLevel: number;
};

export class SpriteEngine {
	private defaultOptions: SpriteEngineOptions = {
		selector: "#vp-player-container",
	};
	private options: SpriteEngineOptions;

	public spriteStatus: SpriteStatus = {
		isSleeping: false,
		playerLevel: 5,
		playerLevelProgress: 13,
		happinessLevel: 15,
		satedLevel: 27,
		energyLevel: 61,
	};

	private _direction: SpriteDirection = SpriteDirection.LEFT;
	public get direction(): SpriteDirection {
		return this._direction;
	}
	public set direction(newValue: SpriteDirection) {
		if (newValue !== this._direction) {
			if (newValue === SpriteDirection.LEFT) {
				document.querySelector(this.options.selector).classList.add("vp-direction-left");
				document.querySelector(this.options.selector).classList.remove("vp-direction-right");
			} else {
				document.querySelector(this.options.selector).classList.remove("vp-direction-left");
				document.querySelector(this.options.selector).classList.add("vp-direction-right");
			}
		}
		this._direction = newValue;
	}

	constructor(opt: SpriteEngineOptions) {
		this.options = { ...this.defaultOptions, ...opt };
	}
}
