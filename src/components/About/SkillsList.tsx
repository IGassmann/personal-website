import SkillItem from '@/components/About/SkillItem';

type SkillItemProps = React.ComponentPropsWithoutRef<typeof SkillItem>;

type SkillsListProps = {
  product: SkillItemProps[];
  infrastructure: SkillItemProps[];
};

export default function SkillsList({ product, infrastructure }: SkillsListProps) {
  return (
    <>
      <h2 className="my-4 text-2xl font-medium text-cyan-500">Skills</h2>
      <div className="-mt-4 flex flex-wrap justify-between">
        <div className="mr-10 mt-4">
          <h3 className="mb-2 mt-0 text-xl font-medium text-cyan-500">Product</h3>
          <ul className="p-0">
            {product.map(({ iconPath, name, url }) => (
              <SkillItem {...{ iconPath, name, url }} key={name} />
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="mb-2 mt-0 text-xl font-medium text-cyan-500">Infrastructure</h3>
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
