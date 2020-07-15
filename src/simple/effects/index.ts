import { WebAPIKeyframe } from "../../keyframegen";

class Effect {
  keyframes: WebAPIKeyframe[] = [];

  constructor(_options: EffectOptions) {
    // No-op
  }
}

interface EffectOptions {

}

export { Effect, EffectOptions };