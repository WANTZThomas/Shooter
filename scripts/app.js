const shooter= {}

/**
 * Set up
 */

 shooter.$container = document.querySelector('.shooter')
 shooter.$score = shooter.$container.querySelector('.start')
 shooter.$start = shooter.$container.querySelector('.score .value')
 shooter.$timer = shooter.$container.querySelector('.timer')
 shooter.$targets = shooter.$container.querySelector('.targets')

/**
 * Shooter
 */

 shooter.addTarget = () => 
 {
     const $target = document.createElement('div')
     $target.classList.add('target')
     $target.style.top = `${Math.random() * 100}%`
     $target.style.left = `${Math.random() * 100}%`
     shooter.$targets.appendChild($target)
 }

 shooter.addTarget()