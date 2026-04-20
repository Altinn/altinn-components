import{j as t}from"./iframe-Dj7Cj6th.js";import{S as b}from"./ArrowRedo-DZOUaHhm.js";import{S as v}from"./EyeClosed-BIhED1ju.js";import{S as I}from"./Archive-fCDhiZwM.js";import{S as k}from"./Trash-BWaUzv09.js";import{S as w}from"./ClockDashed-C4nxmfnv.js";import{S as l}from"./TeddyBear-DqZO1MOA.js";import{i as u}from"./inboxSearchResults-DcuP5R49.js";import{C as r}from"./ContextMenu-Td8HQLi8.js";import{L as x}from"./List-DYKtwJbC.js";import{L as d}from"./ListItem-CdIQewdQ.js";import{D as g}from"./DialogListItem-Dp3kNGaI.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-ByPI58ip.js";import"./dialogs-Dlc2_L4X.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DMQemk86.js";import"./AttachmentList-CtaHLJA4.js";import"./AttachmentLink-RvDQnDnV.js";import"./Icon-ClXNgiA2.js";import"./index-CddsnUaU.js";import"./Skeleton-D2EJPpRT.js";import"./Badge-CSrzMhOz.js";import"./Tooltip-DHRUZs7M.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-YImFlbky.js";import"./lite-DaUVFjkg.js";import"./Section-H920sslu.js";import"./Flex-BFoeedqd.js";import"./Heading-CYqNNVt0.js";import"./useHighlightedText-BEM-o_8x.js";import"./TransmissionList-edDJSkIC.js";import"./Transmission-CEKE-48J.js";import"./Typography-NJpqcBZB.js";import"./SeenByLog-tYMnzKND.js";import"./SeenByLogButton-CRCozjEe.js";import"./Button-CSjIyK1w.js";import"./button-BKLxmUvr.js";import"./AvatarGroup-CKpZaMLG.js";import"./Avatar-BthLZDba.js";import"./SeenByLogItem-BWza1oVY.js";import"./Byline-B6rBn3yX.js";import"./Divider-BwiEsQnP.js";import"./DialogActions-C1KS4jO0.js";import"./ButtonGroupDivider-BXtv9C3u.js";import"./ChevronUp-CdPgOeEh.js";import"./ChevronDown-sTkixeUo.js";import"./DropdownBase-ZEELqAjW.js";import"./useClickOutside-BktmS85N.js";import"./ButtonGroup-FtWKGzEG.js";import"./SearchField-IAcAy2TF.js";import"./MagnifyingGlass-CkAWdXLw.js";import"./XMark-CFOHUWx0.js";import"./FieldBase-1wPahpAR.js";import"./Label-knK18nOg.js";import"./index-DyfHnAhP.js";import"./Input-xlo_b8Ui.js";import"./input-Dg3xXmgC.js";import"./MenuListItem-DHv3z0ag.js";import"./MenuListHeading-BcZUdaLF.js";import"./MenuItem-jJDtIeVN.js";import"./ItemMedia-ClCn_Pwn.js";import"./Checkmark-BGb3abOV.js";import"./ItemControls-Dm3s3qCz.js";import"./ChevronRight-DoyD_DMf.js";import"./useMenu-CZ8hjrPb.js";import"./InformationSquare-BF5i3vGC.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-BLxYI4kb.js";import"./Dropdown-DRhtJuEv.js";import"./MenuElipsisHorizontal-B-ABMDTg.js";import"./ItemLink-hS_z791-.js";import"./DialogByline--fkO1sgH.js";import"./DialogMetadata-3AhQsYo_.js";import"./DialogStatus-BfJ9yyfj.js";import"./MetaItem-CF1Z3M9M.js";import"./ProgressIcon-bNcOt_AA.js";import"./Paperclip-DnvKAF-u.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Vt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
