import * as tf from '@tensorflow/tfjs'
import React from 'react'

function Tensorflow() {
    // Build and compile model.
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [10] }));
    model.add(tf.layers.dense({ units: 10 }));
    model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

    // Generate some synthetic data for training.
    const xs = tf.tensor2d([[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]], [4, 10]);
    const ys = tf.tensor2d([[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [7, 7, 7, 7, 7, 7, 7, 7, 7, 7]], [4, 10]);

    // Train model with fit().
    model.fit(xs, ys, { epochs: 1000 });

    // Run inference with predict().
    model.predict(tf.tensor2d([[5, 5, 5, 5, 5, 5, 5, 5, 5, 5]], [1, 10])).print();
    const test = model.predict(tf.tensor2d([[5, 5, 5, 5, 5, 5, 5, 5, 5, 5]], [1, 10])).print();
    return (
        <div>
            {test}
        </div>
    );
}
export default Tensorflow;