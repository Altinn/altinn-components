import{p as t}from"./iframe-43_RSSTf.js";import{S as b}from"./ArrowRedo-D8pLRJhO.js";import{S as v}from"./EyeClosed-BQ3hu7GA.js";import{S as I}from"./Archive-DejoCF8M.js";import{S as k}from"./Trash-sc3FQnLB.js";import{S as w}from"./ClockDashed-BtdrgYQX.js";import{C as r}from"./ContextMenu-e6118nKX.js";import{i as l}from"./inboxSearchResults-Cx9p0fQM.js";import{S as u}from"./TeddyBear-Bz-T9iZz.js";import{L as x}from"./List-CB81-vLr.js";import{D as d}from"./DialogListItem-RawQIVQl.js";import{L as g}from"./ListItem-DsTKnjuo.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BLkk23cI.js";import"./useDropdownMenuController-CrTcS9ep.js";import"./Dropdown-CGlaKjlH.js";import"./index-D9XEmR3s.js";import"./Button-B83AdZGF.js";import"./tooltip-CaRi0lSN.js";import"./XMark-Baw5EL5c.js";import"./SearchField-QwXAT1yz.js";import"./MagnifyingGlass-Bf1420VU.js";import"./FieldBase-DaCzydfk.js";import"./Typography-Ct8ipg3s.js";import"./useHighlightedText-CH9gApkX.js";import"./Skeleton-C5aNvb_u.js";import"./Label-DtAXMx4b.js";import"./Input-B-eeYerN.js";import"./useMenu-CLHDsGsG.js";import"./MenuListItem-CaaZlGvV.js";import"./MenuListHeading-BUwMNUeX.js";import"./MenuItem-DlVW2JuZ.js";import"./ItemMedia-C7TJfaPW.js";import"./Avatar-B5wzfTza.js";import"./AvatarGroup-vsY4p1Py.js";import"./Icon-DxaOlqJE.js";import"./Checkmark-DrnVUh8F.js";import"./ItemLabel-DnPKS4W6.js";import"./Heading-2vQl8tBj.js";import"./ItemControls-DImp59Cc.js";import"./Badge-CLU8wZww.js";import"./Tooltip-DwmHlyIr.js";import"./ChevronRight-DXBQR3xu.js";import"./index-CwY-RffE.js";import"./InformationSquare-BgUnCFaX.js";import"./MenuElipsisHorizontal-DSMY0Bj5.js";import"./dialogs-Co_wELqe.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-ri4tvw1t.js";import"./AttachmentList-QmB9WqDl.js";import"./AttachmentLink-C-aRlSXh.js";import"./File-Bsbyj88V.js";import"./Section-i7Bzbjq_.js";import"./Flex-CbLPS6D2.js";import"./TransmissionList-rSnt1l8x.js";import"./Transmission-BJV8f0Xh.js";import"./SeenByLog-Dg3xuuEq.js";import"./SeenByLogButton-BMsZgkg8.js";import"./SeenByLogItem-D9noGksY.js";import"./Byline-1G4iuBat.js";import"./Divider-4gFXuIQf.js";import"./DialogActions-C2rAIj7V.js";import"./ButtonGroupDivider-ClE2vyad.js";import"./ChevronUp-DrEXLnbF.js";import"./ChevronDown-DzTSEYyg.js";import"./DropdownBase-DTuKUFju.js";import"./useClickOutside-P2ZJxRZ_.js";import"./ButtonGroup-w02pJMP9.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-ByoSv5t_.js";import"./ItemLink-NtTBDy97.js";import"./DialogByline-CNDLxMQa.js";import"./DialogMetadata-Cr9M5bIN.js";import"./DialogStatus-DFmEvZl6.js";import"./MetaItem-CZ4VAFCH.js";import"./ProgressIcon-D8l3JL6m.js";import"./Paperclip-BTsZrMbs.js";import"./Files-BeEKNftm.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Vt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=l.items[0],e=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
