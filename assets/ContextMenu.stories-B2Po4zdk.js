import{j as t}from"./iframe-DUgQHy5z.js";import{S as b}from"./ArrowRedo-DosfPh2g.js";import{S as v}from"./EyeClosed-D_dx6fYu.js";import{S as I}from"./Archive-BPO8NoVo.js";import{S as k}from"./Trash-palqR5xc.js";import{S as w}from"./ClockDashed-DdwCFhaK.js";import{S as l}from"./TeddyBear-BtZph6O9.js";import{i as u}from"./inboxSearchResults-Q1OAvX4n.js";import{C as r}from"./ContextMenu-OokjuZ1o.js";import{L as x}from"./List-EmWT1t1G.js";import{L as d}from"./ListItem-BxV254vh.js";import{D as g}from"./DialogListItem-Bl7uiRnr.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BEmmm-9F.js";import"./dialogs-DIlEPAfk.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CgbTj_LH.js";import"./AttachmentList-C9N75FZ1.js";import"./AttachmentLink-uoxDaPms.js";import"./Icon-D31Usj2D.js";import"./index-CHKdKrFD.js";import"./Skeleton-BWHbMU5J.js";import"./Badge-Tkc8PhNy.js";import"./Tooltip-svLS9stx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-tN_UguZ4.js";import"./lite-DaUVFjkg.js";import"./Section-BJevJr8H.js";import"./Flex-CL-SSZvT.js";import"./Heading-CGuufgH4.js";import"./useHighlightedText-BXy_Fo0F.js";import"./TransmissionList-QchPSlzp.js";import"./Transmission-CbJt8HQd.js";import"./Typography-CInfIHKg.js";import"./SeenByLog-DCiF_Jct.js";import"./SeenByLogButton-DoU_C-mh.js";import"./Button-DAj4Vb1f.js";import"./button-D0axoqj3.js";import"./AvatarGroup-DAp73R1d.js";import"./Avatar-CQy8D3NB.js";import"./SeenByLogItem-I8cUbs4D.js";import"./Byline-NEG0Ssd-.js";import"./Divider-D8pG1bsQ.js";import"./DialogActions-D70lLn0p.js";import"./ButtonGroupDivider-DHIj-T3D.js";import"./ChevronUp-DELRJlHt.js";import"./ChevronDown-BTaF_AA-.js";import"./DropdownBase-B1LZuzwC.js";import"./useClickOutside-nQxD6K1b.js";import"./ButtonGroup-Co0foBbC.js";import"./SearchField-DrvAfAqD.js";import"./MagnifyingGlass-Bvm8HrPp.js";import"./XMark-CIC6hSAY.js";import"./FieldBase-B3m8Pe0B.js";import"./Label-B-nIzD7x.js";import"./index-DtFuKRqq.js";import"./Input-DxofbABb.js";import"./input-BKf2w74T.js";import"./MenuListItem-Cobo65pu.js";import"./MenuListHeading-USeQ6WLV.js";import"./MenuItem-rAhK0ZP8.js";import"./ItemMedia-CtpZg4yw.js";import"./Checkmark-CEKDqcfc.js";import"./ItemControls-eEEzDso3.js";import"./ChevronRight-DcPr7c69.js";import"./useMenu-DKqXZTHj.js";import"./InformationSquare-C5uyE4ek.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-DoVSojsp.js";import"./Dropdown-VwXyzPyy.js";import"./MenuElipsisHorizontal-CPhuLJJA.js";import"./ItemLink-CrE95sD-.js";import"./DialogByline-VdSZCUEw.js";import"./DialogMetadata-DZ7GKW92.js";import"./DialogStatus-DUR0pjjq.js";import"./MetaItem-CVTgIWWG.js";import"./ProgressIcon-Cn156Pz-.js";import"./Paperclip-D4bUtdbF.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Vt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...m.parameters?.docs?.source}}};const Wt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Wt as __namedExportsOrder,Vt as default};
