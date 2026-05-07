import{j as t}from"./iframe-BLYnYdJi.js";import{S as b}from"./ArrowRedo-BsDNR1Pn.js";import{S as v}from"./EyeClosed-BmomYdk8.js";import{S as I}from"./Archive-CQEKpySn.js";import{S as k}from"./Trash-C9XX2244.js";import{S as w}from"./ClockDashed-DbsDanPS.js";import{S as l}from"./TeddyBear-_ZNRy_CF.js";import{i as u}from"./inboxSearchResults-D8pCNJw8.js";import{C as r}from"./ContextMenu-B4pAtZpC.js";import{L as x}from"./List-DoiYd3aY.js";import{L as d}from"./ListItem-Bj5rSe3Q.js";import{D as g}from"./DialogListItem-DXsNp_Pc.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-X7maRfkh.js";import"./dialogs-CfBzYu5n.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DScve6fG.js";import"./AttachmentList-CGlT9Dgr.js";import"./AttachmentLink-2BS8L4pF.js";import"./Icon-BBgjdpk7.js";import"./index-B87fQ9Ty.js";import"./Skeleton-DVFvYbaO.js";import"./Badge-C8IaAeJ7.js";import"./Tooltip-C4gqbQ4g.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-FLCzGq2C.js";import"./lite-DaUVFjkg.js";import"./Section-B5XykhYf.js";import"./Flex-CND7PM33.js";import"./Heading-BbPallRO.js";import"./useHighlightedText-omqdYwyr.js";import"./TransmissionList-BLWhQZty.js";import"./Transmission-BeOVb2cI.js";import"./Typography-CnODk9AP.js";import"./SeenByLog-iRcE5W6q.js";import"./SeenByLogButton-CaRmLRgn.js";import"./Button-DA7PTG8V.js";import"./button-B4GPokGl.js";import"./AvatarGroup-Bj4w1IxT.js";import"./Avatar-R2BW9KiJ.js";import"./SeenByLogItem-BGcJLbfJ.js";import"./Byline-rn6rol_O.js";import"./Divider-D3w2CTq8.js";import"./DialogActions-2eMWtkme.js";import"./ButtonGroupDivider-CvTb59sy.js";import"./ChevronUp-B2zncOUr.js";import"./ChevronDown-2Zea4dpX.js";import"./DropdownBase-CpfAd5uj.js";import"./useClickOutside-B81uq_UB.js";import"./ButtonGroup-CEDbAWnm.js";import"./SearchField-BrbRKSJg.js";import"./MagnifyingGlass-vVGrqHq4.js";import"./XMark-Df3dBUtr.js";import"./FieldBase-CvSJrP7q.js";import"./Label-Br4cyMgU.js";import"./index-CJAPncw7.js";import"./Input-6k10kXxt.js";import"./input-D5lGbDkw.js";import"./MenuListItem-4EzyMnJz.js";import"./MenuListHeading-CHqHsXip.js";import"./MenuItem-QRksz61A.js";import"./ItemMedia-PaceHGjP.js";import"./Checkmark-DfNuFQY9.js";import"./ItemControls-lA3CDM6n.js";import"./ChevronRight-BKn9ueoN.js";import"./useMenu-DImJoMjP.js";import"./InformationSquare-OOV4URoX.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController--K-V2jGb.js";import"./Dropdown-B_CqShRd.js";import"./MenuElipsisHorizontal-CLaaCIK6.js";import"./ItemLink-nxmPLkpY.js";import"./DialogByline-1AwZY2pD.js";import"./DialogMetadata-Cm9fC90K.js";import"./DialogStatus-CZvvgGn4.js";import"./MetaItem-CZaWW2nR.js";import"./ProgressIcon-CaGiBlz8.js";import"./Paperclip-BRG3sxHl.js";import"./Files-CjJrN8ED.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Wt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Xt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Xt as __namedExportsOrder,Wt as default};
