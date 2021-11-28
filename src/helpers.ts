
export function initSound(path: string) {
    const entity =  new Entity()
    engine.addEntity(entity)
    entity.addComponent(
        new AudioSource(new AudioClip(path))
    )
    entity.getComponent(AudioSource).volume = 0.3

    entity.setParent(Attachable.AVATAR)
    return entity
}

export function spawnEntity(shape: Shape, position: Vector3, rotation?: Quaternion) {
    const entity = new Entity()
    
    entity.addComponent(new Transform({ position: position, rotation }))
    entity.addComponent(shape)
    engine.addEntity(entity)
    
    return entity
}


let outWhitePos: number = -1
export const nextValidOutsideWhiteCell = () => {
  if (outWhitePos < outsideCellsWhite.length - 1)
    outWhitePos++
  return outsideCellsWhite[outWhitePos]
}
let outBlackPos: number = -1
export const nextValidOutsideBlackCell = () => {
  if (outBlackPos < outsideCellsBlack.length - 1)
    outBlackPos++
  return outsideCellsBlack[outBlackPos]
}

export const getCurrentOutsideWhiteCell = () => {
  return outWhitePos > -1 ? outsideCellsWhite[outWhitePos] : outsideCellsWhite[0]
}
export const getCurrentOutsideBlackCell = () => {
  return outBlackPos > -1 ? outsideCellsBlack[outBlackPos] : outsideCellsBlack[0]
  return outsideCellsBlack[outBlackPos]
}



function initOutsideCells(offsetX: number, offsetZ: number) {
  let list = [] 
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++){
      if (j != 4 && j != 5) {
        list.push(new Vector3(offsetX + j ,0, offsetZ - i))
        // spawnEntity(new BoxShape(), new Vector3(offsetX + j ,0, offsetZ - i))
      }
    }
  }
  return list  
}

let outsideCellsWhite = initOutsideCells(3.5, 14)
let outsideCellsBlack = initOutsideCells(3.5, 3)