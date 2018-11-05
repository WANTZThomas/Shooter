const shooter= {}

/**
 * Set up
 */

 shooter.$container = document.querySelector('.shooter')
 shooter.$score = shooter.$container.querySelector('.score .value')
 shooter.$start = shooter.$container.querySelector('.start')
 shooter.$timer = shooter.$container.querySelector('.timer')
 shooter.$targets = shooter.$container.querySelector('.targets')
 shooter.score = 0

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

     $target.addEventListener('mouseenter', () =>
     {
         shooter.shootTarget($target)
     })
 }

 shooter.shootTarget = (_$target) =>
 {
    _$target.remove()
    shooter.addTarget()
    shooter.score++
    shooter.$score.textContent = shooter.score
 }
 shooter.addTarget()