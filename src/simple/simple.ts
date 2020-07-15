import { KeyframeGenerator, WebAPIKeyframe, KeyframeOptions } from '../keyframegen';
import { Effect, EffectOptions } from './effects';
import { Wrench } from './effects/wrench';
import { Tada } from './effects/tada';

const EffectClasses = Object.freeze({
  Wrench,
  Tada
});

type SimpleEffect = keyof typeof EffectClasses;

class Simple extends KeyframeGenerator {

  private effect: Effect;

  constructor(
    effect: SimpleEffect,
    options?: EffectOptions
  ) {
    super();
    this.effect = new EffectClasses[effect](options);
  }

  protected getWebAPIKeyframes(_options: KeyframeOptions = {}): WebAPIKeyframe[] {
    const keyframes = [];

    this.effect.keyframes.forEach(keyframe => {
      keyframes.push({ ...keyframe });
    });

    return(this.effect.keyframes);
  }

}

export { Simple };