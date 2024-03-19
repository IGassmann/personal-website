import SkillItem from '@/components/About/SkillItem';

type SkillItemProps = React.ComponentPropsWithoutRef<typeof SkillItem>;

type SkillsListProps = {
  product: SkillItemProps[];
  infrastructure: SkillItemProps[];
};

export default function SkillsList({ product, infrastructure }: SkillsListProps) {
  return (
    <>
      <h2 className="text-cyan-500 font-medium text-2xl my-4">Skills</h2>
      <div className="flex flex-wrap justify-between -mt-4">
        <div className="mt-4 mr-10">
          <h3 className="text-cyan-500 font-medium text-xl mb-2 mt-0">Product</h3>
          <ul className="p-0">
            {product.map(({ iconPath, name, url }) => (
              <SkillItem {...{ iconPath, name, url }} key={name} />
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-cyan-500 font-medium text-xl mb-2 mt-0">Infrastructure</h3>
          <ul className="p-0">
            {infrastructure.map(({ iconPath, name, url }) => (
              <SkillItem {...{ iconPath, name, url }} key={name} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
