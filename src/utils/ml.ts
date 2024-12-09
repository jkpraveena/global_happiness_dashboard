import * as tf from '@tensorflow/tfjs';

export async function predictHappinessScore(
  gdp: number,
  socialSupport: number,
  health: number,
  freedom: number
): Promise<number> {
  const model = await tf.loadLayersModel('happiness-model.json');
  const input = tf.tensor2d([[gdp, socialSupport, health, freedom]]);
  const prediction = model.predict(input) as tf.Tensor;
  const score = (await prediction.data())[0];
  return Math.min(Math.max(score, 0), 10);
}