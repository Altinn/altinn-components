import React from 'react';
import { PageBase, Section, Heading, Typography } from '../../components';
import { useAppContext, ActivityLogPage } from './';
export const ColorsPage = () => {
  const { pageId } = useAppContext();

  const parents = pageId?.split('/');
  const sectionId = parents?.[1];

  if (sectionId === "log") {
    return <ActivityLogPage />
  }

  const colors = ["company", "person", "neutral", 'article']
  const bgColors = ["default", "subtle", "surface", "border", "base"]


  return (
    <PageBase spacing='md'>
      {colors.map(color => {

return (
      <Section>
      {bgColors.map(bg => {
        return (
          <Section bg={bg} color={color} padding='md'>
            {color}/{bg}
        </Section>
        )
      })}
      </Section>
)
})}
        <p>SectionId: {sectionId}</p>
    </PageBase>
  );
};
