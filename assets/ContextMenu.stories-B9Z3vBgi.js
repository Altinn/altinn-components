import{j as t}from"./iframe-BaUVsogD.js";import{S as b}from"./ArrowRedo-CjjOxKOi.js";import{S as v}from"./EyeClosed-CsUg1RaV.js";import{S as I}from"./Archive-B5PAnHjV.js";import{S as k}from"./Trash-idftN5YP.js";import{S as w}from"./ClockDashed-CA_-NbYj.js";import{S as l}from"./TeddyBear-CLlLL1dy.js";import{i as u}from"./inboxSearchResults-uu34EDDH.js";import{C as r}from"./ContextMenu-Ckw6t3Jk.js";import{L as x}from"./List-SYbm324s.js";import{L as d}from"./ListItem-C1RL14_r.js";import{D as g}from"./DialogListItem-CLsgXq7I.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-D8i_et7Z.js";import"./dialogs-CmkPL1U0.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DYDvPsFC.js";import"./AttachmentList-DgyeXMeM.js";import"./AttachmentLink-BoqWO1d4.js";import"./Icon-7hKeNARf.js";import"./index-lARy5TPT.js";import"./Skeleton-yH6qNAEo.js";import"./Badge-DkZxiFUy.js";import"./Section-HLTaZdun.js";import"./Flex-CpmusUMb.js";import"./Heading-Cdi1sqyd.js";import"./useHighlightedText-C23yE0pM.js";import"./TransmissionList-5isu7otZ.js";import"./Transmission-DKSszOaO.js";import"./Typography-BHJ2EAGl.js";import"./SeenByLog-j-RhsQV0.js";import"./SeenByLogButton-D5ZEUhD4.js";import"./Button-mtd2C5dd.js";import"./button-BfXez8v8.js";import"./use-merge-refs-BV0MipOU.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-DFVM-aUE.js";import"./Avatar-u9iGVwtH.js";import"./SeenByLogItem-Cr80D3FQ.js";import"./Byline-q-C2aAbr.js";import"./Divider-dQKXouHw.js";import"./DialogActions-Bz9RLrUj.js";import"./ButtonGroupDivider-BMhj8zcC.js";import"./ChevronUp-DSCWrjOr.js";import"./ChevronDown-C0GjOYlf.js";import"./DropdownBase-WUZxZLfi.js";import"./useClickOutside-B3ExyGqZ.js";import"./ButtonGroup-1O4V6IzI.js";import"./SearchField-BG-HK4fX.js";import"./MagnifyingGlass-DyxA-WAG.js";import"./XMark-vPSUBj6u.js";import"./FieldBase-CZ-07bnd.js";import"./Label-Cge6OnF8.js";import"./index-D4SJX6je.js";import"./Input-BHiIXP8Y.js";import"./input-C1CvvkMg.js";import"./MenuListItem-Bh_jPdY2.js";import"./MenuListHeading-B40v5QW5.js";import"./MenuItem-6c1J0YV3.js";import"./ItemMedia-BVGZtNsE.js";import"./Checkmark-DTahSgDV.js";import"./ChevronRight-sVn034m6.js";import"./useMenu-DnkwvAkg.js";import"./InformationSquare-CDbyjiK5.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-u6nv9687.js";import"./Dropdown-5b9N8l_a.js";import"./Tooltip-WJW_Z0af.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-DJIO2eGB.js";import"./DialogByline-C7zay01s.js";import"./DialogMetadata-DGm94VxC.js";import"./DialogStatus-DjPOLZNm.js";import"./Hourglass-DNOvycCZ.js";import"./MetaProgress-D4M7CF21.js";import"./MetaItemLabel-8dzB6h1G.js";import"./ProgressIcon-ne3wmXu2.js";import"./MetaItem-BaxMAcwH.js";import"./MetaTimestamp-himKDAiW.js";import"./Paperclip-CUEVdVsf.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m=o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]}),s=o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'context-menu-default'
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // open the context menu
    const canvas = within(canvasElement);
    // menu items are rendered via a React portal into document.body
    const body = within(document.body);
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // ensure that the context menu is visible
    await expect(body.getByRole('group')).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: ContextMenuProps) => {
  return <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>;
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: ContextMenuProps) => {
  const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
  const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
  return <List>
      <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>;
}`,...s.parameters?.docs?.source}}};const Zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Zt as __namedExportsOrder,Xt as default};
