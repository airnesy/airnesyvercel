'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Apartment',
    icon: TbBeach,
    description: 'This property is an apartment!',
  },
  {
    label: 'bungalow',
    icon: GiWindmill,
    description: 'This property is a bungalow!',
  },
  {
    label: 'villa',
    icon: MdOutlineVilla,
    description: 'This property is a villa!'
  },
  {
    label: 'mansion',
    icon: TbMountain,
    description: 'This property is in the mansion!'
  },
  {
    label: 'cottage',
    icon: TbPool,
    description: 'This is property has a cottage!'
  },
  {
    label: 'condominium',
    icon: GiIsland,
    description: 'This property is a condominium!'
  },
  {
    label: 'town house',
    icon: GiBoatFishing,
    description: 'This property is a town house!'
  },
  {
    label: 'duplex',
    icon: FaSkiing,
    description: 'This property is a duplex!'
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'This property is a castle!'
  },
  {
    label: 'office space',
    icon: GiCaveEntrance,
    description: 'This property is an office space!'
  },
  {
    label: 'warehouse',
    icon: GiForestCamp,
    description: 'This property is warehouse!'
  },
  {
    label: 'semi-detached',
    icon: BsSnow,
    description: 'This property is a semi-detached house!'
  },
  {
    label: 'Bedsitter',
    icon: GiCactus,
    description: 'This property is in bedsitter!'
  },
  {
    label: 'Studio',
    icon: GiBarn,
    description: 'This property is a studio apartment!'
  },
  {
    label: 'Single-room',
    icon: IoDiamond,
    description: 'This property is a single room!'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;