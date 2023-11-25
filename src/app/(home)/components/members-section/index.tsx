import MemberCard from '@/app/(home)/components/members-section/member-card';

import EGomesImages from '~/images/developers/egomes.jpeg';
import VEvangelista from '~/images/developers/vevangelista.jpg';
import VLagunas from '~/images/developers/vlagunas.png';
import VSakuraiImage from '~/images/developers/vsakurai.jpeg';
const members = [
  {
    name: 'Victor Evangelista',
    title: 'Developer',
    img: VEvangelista,
  },
  {
    name: 'Victor Sakurai',
    title: 'Developer e Video Maker',
    img: VSakuraiImage,
  },
  {
    name: 'Elias Gomes',
    title: 'Developer e Content Producer',
    img: EGomesImages,
  },
  {
    name: 'Vinicius Laguna',
    title: 'Developer',
    img: VLagunas,
  },
];
export default function MembersSection() {
  return (
    <div className='container relative z-[1] flex items-center justify-between'>
      {members.map((member, index) => (
        <MemberCard key={index} {...member} />
      ))}
    </div>
  );
}
