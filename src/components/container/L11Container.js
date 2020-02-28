
import {CANVASSCENEW, CANVASSCENEH} from '../../misc'

import CanvasComponent from '../../canvasComponent'
import TTC from '../TriangleBoxComponent'
import QBC from '../QuestionBoxComponent'
import BBC from '../BrickBoxComponent'
import PBC from '../PipeBoxComponent'
import TBC from '../TransparentBoxComponent'
import CBC from '../CoinBoxComponent'
import IBC from '../InvisibleBoxComponent'
import FlagpoleBoxComponent from '../FlagpoleBoxComponent'
import CoinBonusComponent from '../bonus/CoinBonusComponent'
import ControlPointComponent from '../ControlPointComponent'
import CastleBoxComponent from '../CastleBoxComponent'
import MushroomBonusComponent from '../bonus/MushroomBonusComponent'

import NPCGoomba from '../npc/NPCGoomba'
import NPCKoopaTroopa from '../npc/NPCKoopaTroopa'

export default class L11Container {
	constructor() {
		
		const [FEx, FEy, FLOORH, delta] = [512, 288, 64, 32]

		this.NPCComponents = {
			'npc-goomba1': new NPCGoomba(delta * 22, CANVASSCENEH - FLOORH - delta, 2),
			'npc-goomba2': new NPCGoomba(delta * 40, CANVASSCENEH - FLOORH - delta, 2),
			'npc-goomba3': new NPCGoomba(delta * 51, CANVASSCENEH - FLOORH - delta, 2),
			'npc-goomba4': new NPCGoomba(delta * 52 + delta / 2, CANVASSCENEH - FLOORH - delta, 2),
			'npc-goomba5': new NPCGoomba(delta * 97, CANVASSCENEH - FLOORH - delta, 2),
			'npc-goomba6': new NPCGoomba(delta * 98 + delta / 2, CANVASSCENEH - FLOORH - delta, 2),
			'npc-goomba7': new NPCGoomba(delta * 80, delta * 4, 2),
			'npc-goomba8': new NPCGoomba(delta * 82, delta * 4, 2),
			'npc-koopatroopa1': new NPCKoopaTroopa(delta * 107, CANVASSCENEH - FLOORH - 48, 1, 0),
			'npc-goomba9': new NPCGoomba(delta * 114, CANVASSCENEH - FLOORH - delta, 2),
			'npc-goomba10': new NPCGoomba(delta * 115 + delta / 2, CANVASSCENEH - FLOORH - delta, 2),
			'npc-goomba11': new NPCGoomba(delta * 124, CANVASSCENEH - FLOORH - delta, 2),
			'npc-goomba12': new NPCGoomba(delta * 125 + delta / 2, CANVASSCENEH - FLOORH - delta, 2),
			'npc-goomba13': new NPCGoomba(delta * 128, CANVASSCENEH - FLOORH - delta, 2),
			'npc-goomba14': new NPCGoomba(delta * 129 + delta / 2, CANVASSCENEH - FLOORH - delta, 2),
			'npc-goomba15': new NPCGoomba(delta * 174, CANVASSCENEH - FLOORH - delta, 2),
			'npc-goomba16': new NPCGoomba(delta * 175 + delta / 2, CANVASSCENEH - FLOORH - delta, 2)
			
			// 21 - mushroom in box
			// 64 - mushroom in invisible box
			// 78 - mushroom in box
			// 100 - star in box
			// 109 - mushroom in box 
		}

		this.B1Components = {
			'bg': new CanvasComponent(720, CANVASSCENEH, CanvasComponent.SPRITES.L11B1, 0, 0, 'image'),
			'fbc1': new TBC(0, delta * 13, 720, 64),
			'cbc1': new CBC(delta * 8 + 22, delta * 5 + 4, 'UG'),
			'cbc2': new CBC(delta * 9 + 22, delta * 5 + 4, 'UG'),
			'cbc3': new CBC(delta * 10 + 22, delta * 5 + 4, 'UG'),
			'cbc4': new CBC(delta * 11 + 22, delta * 5 + 4, 'UG'),
			'cbc5': new CBC(delta * 12 + 22, delta * 5 + 4, 'UG'),
			'cbc6': new CBC(delta * 12 + 22, delta * 7 + 4, 'UG'),
			'cbc7': new CBC(delta * 13 + 22, delta * 7 + 4, 'UG'),
			'cbc8': new CBC(delta * 11 + 22, delta * 7 + 4, 'UG'),
			'cbc9': new CBC(delta * 10 + 22, delta * 7 + 4, 'UG'),
			'cbc10': new CBC(delta * 9 + 22, delta * 7 + 4, 'UG'),
			'cbc11': new CBC(delta * 8 + 22, delta * 7 + 4, 'UG'),
			'cbc12': new CBC(delta * 7 + 22, delta * 7 + 4, 'UG'),
			'cbc13': new CBC(delta * 12 + 22, delta * 9 + 4, 'UG'),
			'cbc14': new CBC(delta * 13 + 22, delta * 9 + 4, 'UG'),
			'cbc15': new CBC(delta * 11 + 22, delta * 9 + 4, 'UG'),
			'cbc16': new CBC(delta * 10 + 22, delta * 9 + 4, 'UG'),
			'cbc17': new CBC(delta * 9 + 22, delta * 9 + 4, 'UG'),
			'cbc18': new CBC(delta * 8 + 22, delta * 9 + 4, 'UG'),
			'cbc19': new CBC(delta * 7 + 22, delta * 9 + 4, 'UG'),
			'bbc33': new BBC(delta * 7 + 16, delta * 2, 'UG'),
			'bbc34': new BBC(delta * 8 + 16, delta * 2, 'UG'),
			'bbc35': new BBC(delta * 9 + 16, delta * 2, 'UG'),
			'bbc36': new BBC(delta * 10 + 16, delta * 2, 'UG'),
			'bbc37': new BBC(delta * 11 + 16, delta * 2, 'UG'),
			'bbc38': new BBC(delta * 12 + 16, delta * 2, 'UG'),
			'bbc39': new BBC(delta * 13 + 16, delta * 2, 'UG'),
			'bbc1': new BBC(0, delta * 2, 'UG'),
			'bbc2': new BBC(0, delta * 3, 'UG'),
			'bbc3': new BBC(0, delta * 4, 'UG'),
			'bbc4': new BBC(0, delta * 5, 'UG'),
			'bbc5': new BBC(0, delta * 6, 'UG'),
			'bbc6': new BBC(0, delta * 7, 'UG'),
			'bbc7': new BBC(0, delta * 8, 'UG'),
			'bbc8': new BBC(0, delta * 9, 'UG'),
			'bbc9': new BBC(0, delta * 10, 'UG'),
			'bbc10': new BBC(0, delta * 11, 'UG'),
			'bbc11': new BBC(0, delta * 12, 'UG'),
			'bbc12': new BBC(delta * 7 + 16, delta * 12, 'UG'),
			'bbc13': new BBC(delta * 8 + 16, delta * 12, 'UG'),
			'bbc14': new BBC(delta * 9 + 16, delta * 12, 'UG'),
			'bbc15': new BBC(delta * 10 + 16, delta * 12, 'UG'),
			'bbc16': new BBC(delta * 11 + 16, delta * 12, 'UG'),
			'bbc17': new BBC(delta * 12 + 16, delta * 12, 'UG'),
			'bbc18': new BBC(delta * 13 + 16, delta * 12, 'UG'),
			'bbc19': new BBC(delta * 7 + 16, delta * 11, 'UG'),
			'bbc20': new BBC(delta * 8 + 16, delta * 11, 'UG'),
			'bbc21': new BBC(delta * 9 + 16, delta * 11, 'UG'),
			'bbc22': new BBC(delta * 10 + 16, delta * 11, 'UG'),
			'bbc23': new BBC(delta * 11 + 16, delta * 11, 'UG'),
			'bbc24': new BBC(delta * 12 + 16, delta * 11, 'UG'),
			'bbc25': new BBC(delta * 13 + 16, delta * 11, 'UG'),
			'bbc26': new BBC(delta * 7 + 16, delta * 10, 'UG'),
			'bbc27': new BBC(delta * 8 + 16, delta * 10, 'UG'),
			'bbc28': new BBC(delta * 9 + 16, delta * 10, 'UG'),
			'bbc29': new BBC(delta * 10 + 16, delta * 10, 'UG'),
			'bbc30': new BBC(delta * 11 + 16, delta * 10, 'UG'),
			'bbc31': new BBC(delta * 12 + 16, delta * 10, 'UG'),
			'bbc32': new BBC(delta * 13 + 16, delta * 10, 'UG'),
			'pbc1p1': new PBC(delta * 20 - 16, CANVASSCENEH - FLOORH * 2, [5, 1], true, ['L11', 'pbc5']),
			'pbc1p2': new CanvasComponent(28 * 2, 480 - 64 * 3, CanvasComponent.SPRITES.PSTF, delta * 22 - 12, CANVASSCENEH - delta * 13, 'sprite', 118, 414, 28, 2)
		}
		
		this.NCCComponents = {
			'bg': new CanvasComponent(6656, CANVASSCENEH, CanvasComponent.SPRITES.L11, 0, 0, 'image'),
			'fbc1': new TBC(0, CANVASSCENEH - FLOORH, delta * 69, FLOORH),
			'fbc2': new TBC(delta * 71, CANVASSCENEH - FLOORH, delta * 15, FLOORH),
			'fbc3': new TBC(delta * (71 + 15 + 3), CANVASSCENEH - FLOORH, delta * 64, FLOORH),
			'fbc4': new TBC(delta * (71 + 15 + 3 + 64 + 2), CANVASSCENEH - FLOORH, delta * 53, FLOORH),
			'qbc1': new QBC(FEx, FEy).bindBonus(new CoinBonusComponent, 1),
			'qbc2': new QBC(FEx + delta * 5, FEy).bindBonus(new MushroomBonusComponent('OW', false, 1), 1, true, true),
			'qbc3': new QBC(FEx + delta * 6, FEy - delta * 4).bindBonus(new CoinBonusComponent, 1),
			'qbc4': new QBC(FEx + delta * 7, FEy).bindBonus(new CoinBonusComponent, 1),
 			'bbc1': new BBC(FEx + delta * 4, FEy),
 			'bbc2': new BBC(FEx + delta * 6, FEy),
 			'bbc3': new BBC(FEx + delta * 8, FEy),
			'pbc1': new PBC(FEx + delta * 12, FEy + delta * 2, [1, 1]),
			'pbc2': new PBC(FEx + delta * 22, FEy + delta, [2, 1]),
			'pbc3': new PBC(FEx + delta * 30, FEy, [3, 1]),
			'pbc4': new PBC(FEx + delta * 41, FEy, [3, 1], true, ['L11', 'B1']),
			'ibc1': new IBC(FEx + delta * 48, FEy - delta).bindBonus(new MushroomBonusComponent('OW', false, 0), 1, true, true),
 			'bbc4': new BBC(FEx + delta * 61, FEy),
 			'bbc5': new BBC(FEx + delta * 63, FEy),
			'qbc5': new QBC(FEx + delta * 62, FEy),
 			'bbc6': new BBC(FEx + delta * 64, FEy - delta * 4),
 			'bbc7': new BBC(FEx + delta * 65, FEy - delta * 4),
 			'bbc8': new BBC(FEx + delta * 66, FEy - delta * 4),
 			'bbc9': new BBC(FEx + delta * 67, FEy - delta * 4),
 			'bbc10': new BBC(FEx + delta * 68, FEy - delta * 4),
 			'bbc11': new BBC(FEx + delta * 69, FEy - delta * 4),
 			'bbc12': new BBC(FEx + delta * 70, FEy - delta * 4),
 			'bbc13': new BBC(FEx + delta * 71, FEy - delta * 4),
 			'bbc14': new BBC(FEx + delta * 75, FEy - delta * 4),
 			'bbc15': new BBC(FEx + delta * 76, FEy - delta * 4),
 			'bbc16': new BBC(FEx + delta * 77, FEy - delta * 4),
			'qbc6': new QBC(FEx + delta * 78, FEy - delta * 4).bindBonus(new CoinBonusComponent, 1),
 			'bbc17': new BBC(FEx + delta * 78, FEy).bindBonus(new CoinBonusComponent, 6),
 			'bbc18': new BBC(FEx + delta * 84, FEy),
 			'bbc19': new BBC(FEx + delta * 85, FEy),
			'qbc7': new QBC(FEx + delta * 93, FEy - delta * 4),
			'qbc8': new QBC(FEx + delta * 93, FEy).bindBonus(new CoinBonusComponent, 1),
			'qbc9': new QBC(FEx + delta * 90, FEy).bindBonus(new CoinBonusComponent, 1),
			'qbc10': new QBC(FEx + delta * 96, FEy).bindBonus(new CoinBonusComponent, 1),
 			'bbc20': new BBC(FEx + delta * 102, FEy),
 			'bbc21': new BBC(FEx + delta * 105, FEy - delta * 4),
 			'bbc22': new BBC(FEx + delta * 106, FEy - delta * 4),
 			'bbc23': new BBC(FEx + delta * 107, FEy - delta * 4),
 			'bbc24': new BBC(FEx + delta * 112, FEy - delta * 4),
 			'bbc25': new BBC(FEx + delta * 115, FEy - delta * 4),
 			'bbc26': new BBC(FEx + delta * 114, FEy),
 			'bbc27': new BBC(FEx + delta * 113, FEy),
			'qbc11': new QBC(FEx + delta * 113, FEy - delta * 4).bindBonus(new CoinBonusComponent, 1),
			'qbc12': new QBC(FEx + delta * 114, FEy - delta * 4).bindBonus(new CoinBonusComponent, 1),
			'ttc1': new TTC(FEx + delta * 121, FEy),
			'ttc2': new TTC(FEx + delta * 121, FEy + delta * 1),
			'ttc3': new TTC(FEx + delta * 121, FEy + delta * 2),
			'ttc4': new TTC(FEx + delta * 121, FEy + delta * 3),
			'ttc5': new TTC(FEx + delta * 120, FEy + delta * 1),
			'ttc6': new TTC(FEx + delta * 119, FEy + delta * 2),
			'ttc7': new TTC(FEx + delta * 118, FEy + delta * 3),
			'ttc8': new TTC(FEx + delta * 119, FEy + delta * 3),
			'ttc9': new TTC(FEx + delta * 120, FEy + delta * 3),
			'ttc10': new TTC(FEx + delta * 120, FEy + delta * 2),
			'ttc11': new TTC(FEx + delta * 124, FEy),
			'ttc12': new TTC(FEx + delta * 124, FEy + delta * 1),
			'ttc13': new TTC(FEx + delta * 124, FEy + delta * 2),
			'ttc14': new TTC(FEx + delta * 124, FEy + delta * 3),
			'ttc15': new TTC(FEx + delta * 125, FEy + delta * 1),
			'ttc16': new TTC(FEx + delta * 125, FEy + delta * 2),
			'ttc17': new TTC(FEx + delta * 125, FEy + delta * 3),
			'ttc18': new TTC(FEx + delta * 126, FEy + delta * 3),
			'ttc19': new TTC(FEx + delta * 126, FEy + delta * 2),
			'ttc20': new TTC(FEx + delta * 127, FEy + delta * 3),
			'ttc21': new TTC(FEx + delta * 139, FEy),
			'ttc22': new TTC(FEx + delta * 139, FEy + delta * 1),
			'ttc23': new TTC(FEx + delta * 139, FEy + delta * 2), 
			'ttc24': new TTC(FEx + delta * 139, FEy + delta * 3), 
			'ttc25': new TTC(FEx + delta * 140, FEy + delta * 1), 
			'ttc26': new TTC(FEx + delta * 140, FEy + delta * 2), 
			'ttc27': new TTC(FEx + delta * 140, FEy + delta * 3), 
			'ttc28': new TTC(FEx + delta * 141, FEy + delta * 3), 
			'ttc29': new TTC(FEx + delta * 141, FEy + delta * 2), 
			'ttc30': new TTC(FEx + delta * 142, FEy + delta * 3), 
			'ttc31': new TTC(FEx + delta * 135, FEy), 
			'ttc32': new TTC(FEx + delta * 135, FEy + delta * 1), 
			'ttc33': new TTC(FEx + delta * 135, FEy + delta * 2), 
			'ttc34': new TTC(FEx + delta * 135, FEy + delta * 3), 
			'ttc35': new TTC(FEx + delta * 134, FEy + delta * 1), 
			'ttc36': new TTC(FEx + delta * 133, FEy + delta * 2), 
			'ttc37': new TTC(FEx + delta * 132, FEy + delta * 3), 
			'ttc38': new TTC(FEx + delta * 133, FEy + delta * 3), 
			'ttc39': new TTC(FEx + delta * 134, FEy + delta * 3), 
			'ttc40': new TTC(FEx + delta * 134, FEy + delta * 2), 
			'ttc41': new TTC(FEx + delta * 136, FEy),
			'ttc42': new TTC(FEx + delta * 136, FEy + delta * 1),
			'ttc43': new TTC(FEx + delta * 136, FEy + delta * 2),
			'ttc44': new TTC(FEx + delta * 136, FEy + delta * 3),
			'pbc5': new PBC(FEx + delta * 147, FEy + delta * 2, [1, 1]),
			'pbc6': new PBC(FEx + delta * 163, FEy + delta * 2, [1, 1]),
			'bbc28': new BBC(FEx + delta * 155, FEy),
			'bbc29': new BBC(FEx + delta * 153, FEy),
			'bbc30': new BBC(FEx + delta * 152, FEy),
			'qbc13': new QBC(FEx + delta * 154, FEy).bindBonus(new CoinBonusComponent, 1),
			'ttc45': new TTC(FEx + delta * 165, FEy + delta * 3),
			'ttc46': new TTC(FEx + delta * 166, FEy + delta * 3),
			'ttc47': new TTC(FEx + delta * 167, FEy + delta * 3), 
			'ttc48': new TTC(FEx + delta * 168, FEy + delta * 3), 
			'ttc49': new TTC(FEx + delta * 169, FEy + delta * 3), 
			'ttc50': new TTC(FEx + delta * 170, FEy + delta * 3), 
			'ttc51': new TTC(FEx + delta * 171, FEy + delta * 3), 
			'ttc52': new TTC(FEx + delta * 172, FEy + delta * 3), 
			'ttc53': new TTC(FEx + delta * 173, FEy + delta * 3), 
			'ttc54': new TTC(FEx + delta * 166, FEy + delta * 2), 
			'ttc55': new TTC(FEx + delta * 167, FEy + delta * 2), 
			'ttc56': new TTC(FEx + delta * 168, FEy + delta * 2), 
			'ttc57': new TTC(FEx + delta * 169, FEy + delta * 2), 
			'ttc58': new TTC(FEx + delta * 170, FEy + delta * 2), 
			'ttc59': new TTC(FEx + delta * 171, FEy + delta * 2), 
			'ttc60': new TTC(FEx + delta * 172, FEy + delta * 2), 
			'ttc61': new TTC(FEx + delta * 173, FEy + delta * 2),
			'ttc62': new TTC(FEx + delta * 167, FEy + delta),
			'ttc63': new TTC(FEx + delta * 168, FEy + delta),
			'ttc64': new TTC(FEx + delta * 169, FEy + delta),
			'ttc65': new TTC(FEx + delta * 170, FEy + delta),
			'ttc66': new TTC(FEx + delta * 171, FEy + delta),
			'ttc67': new TTC(FEx + delta * 172, FEy + delta),
			'ttc68': new TTC(FEx + delta * 173, FEy + delta),
			'ttc69': new TTC(FEx + delta * 168, FEy),
			'ttc70': new TTC(FEx + delta * 169, FEy),
			'ttc71': new TTC(FEx + delta * 170, FEy),
			'ttc72': new TTC(FEx + delta * 171, FEy),
			'ttc73': new TTC(FEx + delta * 172, FEy),
			'ttc74': new TTC(FEx + delta * 173, FEy),
			'ttc75': new TTC(FEx + delta * 169, FEy - delta * 1),
			'ttc76': new TTC(FEx + delta * 170, FEy - delta * 1),
			'ttc77': new TTC(FEx + delta * 171, FEy - delta * 1),
			'ttc78': new TTC(FEx + delta * 172, FEy - delta * 1),
			'ttc79': new TTC(FEx + delta * 173, FEy - delta * 1),
			'ttc80': new TTC(FEx + delta * 170, FEy - delta * 2),
			'ttc81': new TTC(FEx + delta * 171, FEy - delta * 2),
			'ttc82': new TTC(FEx + delta * 172, FEy - delta * 2),
			'ttc83': new TTC(FEx + delta * 173, FEy - delta * 2),
			'ttc84': new TTC(FEx + delta * 171, FEy - delta * 3),
			'ttc85': new TTC(FEx + delta * 172, FEy - delta * 3),
			'ttc86': new TTC(FEx + delta * 173, FEy - delta * 3),
			'ttc87': new TTC(FEx + delta * 172, FEy - delta * 4),
			'ttc88': new TTC(FEx + delta * 173, FEy - delta * 4),
			'container-flagpole': new FlagpoleBoxComponent(FEx + delta * 181, CANVASSCENEH - FLOORH - delta),
			'container-castle': new CastleBoxComponent(FEx + delta * 186, CANVASSCENEH - FLOORH - delta * 5, 0),
			'controlpoint': new ControlPointComponent(FEx + delta * 189, CANVASSCENEH - FLOORH - delta, 1, delta, ControlPointComponent.TYPES.CASTLEENTRY)
		}
	}
}