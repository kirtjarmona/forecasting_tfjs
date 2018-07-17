// --------predict_1
async function predict_1(arr) {
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [2]}));
    const learningRate = 0.0001;   
    const optimizer = tf.train.sgd(learningRate);
    model.compile({
      loss: 'meanSquaredError',
      optimizer: optimizer
    });
    const xs = tf.tensor([[1,1],[2,2],[3,3],[4,4],[5,1],[6,2],[7,3],[8,4],[9,1],[10,2],[11,3],[12,4],[13,1],[14,2],[15,3],[16,4],[17,1],]);
    const ys = tf.tensor([62578,4540,43516,26672,59020,5360,55211,16731,49573,2813,38038,30381,51750,4581,45387,25144,61869], [17, 1]);
    await model.fit(xs, ys, {epochs: 1000});
   var pred = model.predict(tf.tensor(arr, [1, 2]));
   var dataNumiric = pred.dataSync();
   var promise1 = Promise.resolve(dataNumiric);
   promise1.then(function(value) {
    var dx = document.getElementById('pred1').innerText = value;
        });
   return promise1;
  }
// --------predict_2
async function predict_2(arr) {
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [2]}));
    const learningRate = 0.000001;   
    const optimizer = tf.train.sgd(learningRate);
    model.compile({
      loss: 'meanSquaredError',
      optimizer: optimizer
    });
    const xs = tf.tensor([[1,1],[2,2],[3,3],[4,4],[5,1],[6,2],[7,3],[8,4],[9,1],[10,2],[11,3],[12,4],[13,1],[14,2],[15,3],[16,4],[17,1],]);
    const ys = tf.tensor([62578,4540,43516,26672,59020,5360,55211,16731,49573,2813,38038,30381,51750,4581,45387,25144,61869], [17, 1]);
    await model.fit(xs, ys, {epochs: 450});
   var pred = model.predict(tf.tensor(arr, [1, 2]));
   var dataNumiric = pred.dataSync();
   var promise1 = Promise.resolve(dataNumiric);
   promise1.then(function(value) {
    var dx = document.getElementById('pred2').innerText = value;
        });
   return promise1;
  }
// --------predict_3
async function predict_3(arr) {
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [2]}));
    const learningRate = 0.00001;   
    const optimizer = tf.train.sgd(learningRate);
    model.compile({
      loss: 'meanSquaredError',
      optimizer: optimizer
    });
    const xs = tf.tensor([[1,1],[2,2],[3,3],[4,4],[5,1],[6,2],[7,3],[8,4],[9,1],[10,2],[11,3],[12,4],[13,1],[14,2],[15,3],[16,4],[17,1],]);
    const ys = tf.tensor([62578,4540,43516,26672,59020,5360,55211,16731,49573,2813,38038,30381,51750,4581,45387,25144,61869], [17, 1]);
    await model.fit(xs, ys, {epochs: 1000});
   var pred = model.predict(tf.tensor(arr, [1, 2]));
   var dataNumiric = pred.dataSync();
   var promise1 = Promise.resolve(dataNumiric);
   promise1.then(function(value) {
    var dx = document.getElementById('pred3').innerText = value;
        });
   return promise1;
  }
// --------predict_4
async function predict_4(arr) {
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [2]}));
    const learningRate = 0.00001;   
    const optimizer = tf.train.sgd(learningRate);
    model.compile({
      loss: 'meanSquaredError',
      optimizer: optimizer
    });
    const xs = tf.tensor([[1,1],[2,2],[3,3],[4,4],[5,1],[6,2],[7,3],[8,4],[9,1],[10,2],[11,3],[12,4],[13,1],[14,2],[15,3],[16,4],[17,1],]);
    const ys = tf.tensor([62578,4540,43516,26672,59020,5360,55211,16731,49573,2813,38038,30381,51750,4581,45387,25144,61869], [17, 1]);
    await model.fit(xs, ys, {epochs: 300});
   var pred = model.predict(tf.tensor(arr, [1, 2]));
   var dataNumiric = pred.dataSync();
   var promise1 = Promise.resolve(dataNumiric);
   promise1.then(function(value) {
    var dx = document.getElementById('pred4').innerText = value;
        });
   return promise1;
  }
// predict_1([21,1]);
// predict_2([18,2]);
// predict_3([19,3]);
// predict_4([20,4]);
async function graph() {

 
    var pred1 = document.getElementById("pred1").innerText;
    var fix_float = parseFloat(pred1).toFixed(2);
    var pred1_f = parseFloat(fix_float);

    var pred2 = document.getElementById("pred2").innerText;
    var fix_float = parseFloat(pred2).toFixed(2);
    var pred2_f = parseFloat(fix_float);

    var pred3 = document.getElementById("pred3").innerText;
    var fix_float = parseFloat(pred3).toFixed(2);
    var pred3_f = parseFloat(fix_float);

    var pred4 = document.getElementById("pred4").innerText;
    var fix_float = parseFloat(pred4).toFixed(2);
    var pred4_f = parseFloat(fix_float);

    Highcharts.chart('container', {
        title: {
            text: 'Combination chart'
        },
        xAxis: {
            categories: ['Apples']
        },
        labels: {
            items: [{
                html: 'Total fruit consumption',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Quater 1',
            data: [{y:pred1_f}]
        }, {
            type: 'column',
            name: 'Quater 2',
            data: [{y:pred2_f}]
        }, {
            type: 'column',
            name: 'Quater 3',
            data: [{y:pred3_f}]
        }, {
            type: 'column',
            name: 'Quater 4',
            data: [{y:pred4_f}]
        }]
    });
}