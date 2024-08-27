import {
  areaA,
  areaC,
  areaD,
  areaE,
  areaF,
  areaG,
  fotoOne,
  fotoTwo,
  fotoThree,
  fotoFour,
  fotoFive,
  fotoSix,
  one,
  two,
  three,
  four,
  five,
  six
} from "./elements.js"

export default function () {

  function changeBackground(areaOne, areaTwo, areaThree, areaFour, areaFive) {
    areaOne.classList.add('hide')
    areaTwo.classList.add('hide')
    areaThree.classList.add('hide')
    areaFour.classList.add('hide')
    areaFive.classList.add('hide')
  };

  areaA.addEventListener('click', function () {
    changeBackground(two, three, four, five, six)
    changeBackground(fotoTwo, fotoThree, fotoFour, fotoFive, fotoSix)
    one.classList.remove('hide')
    fotoOne.classList.remove('hide')
  });

  areaC.addEventListener('click', function () {
    changeBackground(one, three, four, five, six)
    changeBackground(fotoOne, fotoThree, fotoFour, fotoFive, fotoSix)
    two.classList.remove('hide')
    fotoTwo.classList.remove('hide')
  });

  areaD.addEventListener('click', function () {
    changeBackground(one, two, three, five, six)
    changeBackground(fotoOne, fotoTwo, fotoFour, fotoFive, fotoSix)
    three.classList.remove('hide')
    fotoThree.classList.remove('hide')
  });

  areaE.addEventListener('click', function () {
    changeBackground(one, two, three, five, six)
    changeBackground(fotoOne, fotoTwo, fotoThree, fotoFive, fotoSix)
    four.classList.remove('hide')
    fotoFour.classList.remove('hide')
  });

  areaF.addEventListener('click', function () {
    changeBackground(one, two, three, four, six)
    changeBackground(fotoOne, fotoTwo, fotoThree, fotoFour, fotoSix)
    five.classList.remove('hide')
    fotoFive.classList.remove('hide')
  });

  areaG.addEventListener('click', function () {
    changeBackground(one, two, three, four, five)
    changeBackground(fotoOne, fotoTwo, fotoThree, fotoFour, fotoFive)
    six.classList.remove('hide')
    fotoSix.classList.remove('hide')
  });

}
