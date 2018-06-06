'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var VERTICAL_GAP = 20;
var TEXT_HEIGHT = 10;
var BAR_WIDTH = 40;
var barHeight = (4 * TEXT_HEIGHT) + (4 * VERTICAL_GAP) - CLOUD_HEIGHT;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + VERTICAL_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + VERTICAL_GAP + TEXT_HEIGHT + TEXT_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - CLOUD_Y);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - (TEXT_HEIGHT * 2) - VERTICAL_GAP
      - (-((barHeight * times[i]) / maxTime)));
    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - VERTICAL_GAP - TEXT_HEIGHT, BAR_WIDTH,
      (barHeight * times[i]) / maxTime);
  }
};
