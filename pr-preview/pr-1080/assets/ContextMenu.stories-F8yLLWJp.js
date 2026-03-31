import{j as t}from"./iframe-CRyMHjBa.js";import{S as b}from"./ArrowRedo-W9KHDxQk.js";import{S as v}from"./EyeClosed-DiqIRm6y.js";import{S as I}from"./Archive-DkDv7ZML.js";import{S as k}from"./Trash-DL1Wx2eb.js";import{S as w}from"./ClockDashed-CfQvL8vj.js";import{S as l}from"./TeddyBear-wFY6Cn4c.js";import{i as u}from"./inboxSearchResults-CVTMF7tY.js";import{C as r}from"./ContextMenu-CLs9-bGN.js";import{L as x}from"./List-RBs8EUgU.js";import{L as d}from"./ListItem-DD-4gcQV.js";import{D as g}from"./DialogListItem-CD3Ab_7m.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Gvikg1Q9.js";import"./dialogs-C-cVnUxv.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CyCzcE0T.js";import"./AttachmentList-Dssw0n3y.js";import"./AttachmentLink-CDgL1ab7.js";import"./Icon-BfxILC1T.js";import"./index-DHHnxdIx.js";import"./Skeleton-CU7lBKK8.js";import"./Badge-DxjDnsAp.js";import"./Section-CFSk5LUB.js";import"./Flex-B-FAPRYp.js";import"./Heading-DKMjfDI1.js";import"./useHighlightedText-Bmeo4cMl.js";import"./TransmissionList-BrE2IJTh.js";import"./Transmission-Bqpt1FVn.js";import"./Typography-KJ3duhAj.js";import"./SeenByLog-BVcCU3mU.js";import"./SeenByLogButton-Dv2fZntE.js";import"./Button-CrFbX_o6.js";import"./button-W5jAAf--.js";import"./use-merge-refs-BY8NGhF3.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-B0xdyHS8.js";import"./Avatar-CTjQUhWB.js";import"./SeenByLogItem-8gpoXDBv.js";import"./Byline-D01BWD_j.js";import"./Divider-D2QbJSlC.js";import"./DialogActions-CN5vCOgw.js";import"./ButtonGroupDivider-uVMrpMEY.js";import"./ChevronUp-CBBTERwT.js";import"./ChevronDown-BlPSQm6Z.js";import"./DropdownBase-eqswJ89b.js";import"./useClickOutside-CPg_rkSq.js";import"./ButtonGroup-Be2TeWIw.js";import"./SearchField-DHI_G06y.js";import"./MagnifyingGlass-XVKvC6WT.js";import"./XMark-Bzo2iZ4y.js";import"./FieldBase-CJQ_rSUH.js";import"./Label-BTqPQVQX.js";import"./index-DK7gfoBf.js";import"./Input-Dhhr3RHW.js";import"./input-BbNQnC6I.js";import"./MenuListItem-DntYuD8P.js";import"./MenuListHeading-BM8Os7Ca.js";import"./MenuItem-BP5FkdDy.js";import"./ItemMedia-C-5aGPRT.js";import"./Checkmark-DF0LRIQJ.js";import"./ChevronRight-CBrYYsjR.js";import"./useMenu-lx2RC1HO.js";import"./InformationSquare-BIUK32sG.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-7zQVYc9O.js";import"./Dropdown-BU08g0A_.js";import"./Tooltip-BOYFMKfm.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-DMdAke1l.js";import"./DialogByline-y5Oq1HFW.js";import"./DialogMetadata-DAYDHh63.js";import"./DialogStatus-DULZFzVh.js";import"./Hourglass-o8NnfyNt.js";import"./MetaProgress-CM9b_idc.js";import"./MetaItemLabel-BLSczs8t.js";import"./ProgressIcon-BDBSYRMk.js";import"./MetaItem-DtVUUwSw.js";import"./MetaTimestamp-DoQ9am9c.js";import"./Paperclip-C4p5z3e9.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m=o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]}),s=o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
