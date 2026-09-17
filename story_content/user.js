function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6PyDte0N47R":
        Script1();
        break;
      case "64E1Jlmujd5":
        Script2();
        break;
      case "6bVK3304ya2":
        Script3();
        break;
      case "6UZwaBH0dXG":
        Script4();
        break;
      case "68NrrnIxmHm":
        Script5();
        break;
      case "6Lzv2DMXFBK":
        Script6();
        break;
      case "5znh4mcuSFT":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=1.0;
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.0;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.4;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.6;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.8;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume= 1.0;
}

