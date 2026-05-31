import{p as t}from"./iframe-B0raGbVc.js";import{S as b}from"./ArrowRedo-Bc1ImDTo.js";import{S as v}from"./EyeClosed-C77bSwzZ.js";import{S as I}from"./Archive-uIJiMAtn.js";import{S as k}from"./Trash-Bu2Rqg9N.js";import{S as w}from"./ClockDashed-BnA4tYuQ.js";import{C as r}from"./ContextMenu-BVVWzEzP.js";import{i as l}from"./inboxSearchResults-C_0L4vqv.js";import{S as u}from"./TeddyBear-RIZgwR6w.js";import{L as x}from"./List-BUxiMRhB.js";import{D as d}from"./DialogListItem-i5BvjUsn.js";import{L as g}from"./ListItem-CBFwejwW.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DjmMrSjF.js";import"./useDropdownMenuController-CZGIg3GD.js";import"./Dropdown-XaITxOJ1.js";import"./index-BFPoepm_.js";import"./Button-DaZ5Xj9O.js";import"./tooltip-C563LrpG.js";import"./XMark-Vu63tlKp.js";import"./SearchField-x-7DN5Df.js";import"./MagnifyingGlass-M1myOHdK.js";import"./FieldBase-COYRg4qt.js";import"./Typography-aMX_Xall.js";import"./useHighlightedText-Cy927kZm.js";import"./Skeleton-Bie46BNt.js";import"./Label-BU6sA0x8.js";import"./Input-DWL065bb.js";import"./useMenu-DBDHaupH.js";import"./MenuListItem-Cqp8gCsN.js";import"./MenuListHeading-BOiM7js_.js";import"./MenuItem-CO5pm5KV.js";import"./ItemMedia-vIK6hHXj.js";import"./Avatar-C_p7vVVJ.js";import"./AvatarGroup-CCFl7ITU.js";import"./Icon-CkGS8ofh.js";import"./Checkmark-w1Y8-xSD.js";import"./ItemLabel-WiIVldH2.js";import"./Heading-HwRbtbil.js";import"./ItemControls-0LHp_bwC.js";import"./Badge-LVeKbEwp.js";import"./Tooltip-drcV-Psw.js";import"./ChevronRight-B1cS3dE4.js";import"./index-BdK8fp8H.js";import"./InformationSquare-C1Z5-XLz.js";import"./MenuElipsisHorizontal-1hmmtM6d.js";import"./dialogs-BAXJ3BnD.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-ClFAYpn2.js";import"./AttachmentList-C41BZ8U0.js";import"./AttachmentLink-C1xQ3rsw.js";import"./File-DSnP523V.js";import"./Section-DlNTQI-0.js";import"./Flex-DAM9Vgpa.js";import"./TransmissionList-DWiQk3in.js";import"./Transmission-LOE9uj04.js";import"./SeenByLog-DVwaCuDV.js";import"./SeenByLogButton-BX3ubFCo.js";import"./SeenByLogItem-B9mOh7Qz.js";import"./Byline-Btf5bXOo.js";import"./Divider-B2Ff9UTl.js";import"./DialogActions-BHMDHQWR.js";import"./ButtonGroupDivider-CTCa-xOS.js";import"./ChevronUp-Cz4MSlUQ.js";import"./ChevronDown-CNqUwOXO.js";import"./DropdownBase-C-F4qPsF.js";import"./useClickOutside-BiobHqOy.js";import"./ButtonGroup-DlKQjFoe.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-BOE3ch8M.js";import"./ItemLink-CuY20mCv.js";import"./DialogByline-B-55e2bj.js";import"./DialogMetadata-DIc36NhW.js";import"./DialogStatus-BdTWMicJ.js";import"./MetaItem-CiXDeigZ.js";import"./ProgressIcon-CGMsVal0.js";import"./Paperclip-DwprE3KU.js";import"./Files-Dk8XN8XA.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Vt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=l.items[0],e=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
