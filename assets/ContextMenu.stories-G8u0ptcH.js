import{a7 as t}from"./iframe-CDUjh_2z.js";import{S as b}from"./ArrowRedo-BW9JzoED.js";import{S as v}from"./EyeClosed-DiOIfVFA.js";import{S as I}from"./Archive-BJIbGZn4.js";import{S as k}from"./Trash-0-27J6Eh.js";import{S as w}from"./ClockDashed-6t3uCpF_.js";import{C as n}from"./ContextMenu-D3Cy3w9b.js";import{i as l}from"./inboxSearchResults-DqCiseQ-.js";import{S as u}from"./TeddyBear-8UhxSXXL.js";import{L as x}from"./List-C4cq5OQ1.js";import{D as d}from"./DialogListItem-B5ER0aIJ.js";import{L as g}from"./ListItem-DX5jQm4y.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-DBEdm3zN.js";import"./Dropdown-Cq9y5l3q.js";import"./SearchField-D9cu5VJD.js";import"./MagnifyingGlass-Dn7hqdrb.js";import"./FieldBase-CC2tJByH.js";import"./Typography-HCvo8I75.js";import"./useHighlightedText-DcMy2tkL.js";import"./Field-BLni3K_t.js";import"./Label-BeOd8owz.js";import"./Input-CyWHlPcl.js";import"./useMenu-CCO_lxMe.js";import"./MenuListItem-CGgNB0ZA.js";import"./MenuListHeading-DztGiWDu.js";import"./MenuItem-GdPNBIG6.js";import"./ItemMedia-Bai-Urcu.js";import"./Avatar-CxwAqCY2.js";import"./AvatarGroup-BYI_T_-3.js";import"./Checkmark-DLLLSSlc.js";import"./ItemLabel-Cz51yrrd.js";import"./Heading-DX7LPsCl.js";import"./ItemControls-Kup6bLJb.js";import"./Badge-9wdqlOC-.js";import"./Tooltip-rnvLebTi.js";import"./ChevronRight-CG3NwLwQ.js";import"./index-BAc6HH-X.js";import"./InformationSquare-CT1i7ej7.js";import"./MenuElipsisHorizontal-Ce-EEiTj.js";import"./dialogs-b-Q2zqiN.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-C6F7H6nw.js";import"./AttachmentList-B75M185u.js";import"./AttachmentLink-BVwfW-fO.js";import"./File-DIsXjIgH.js";import"./Section-xHms6zkB.js";import"./Flex-Bc1_yHC5.js";import"./TransmissionList-DwIZ-Y4W.js";import"./Transmission-E-HcUIfe.js";import"./SeenByLog-D_O8N-YJ.js";import"./SeenByLogButton-CygVU8vu.js";import"./SeenByLogItem-DJuh4vfp.js";import"./Byline-DXrvq6RB.js";import"./Divider-CjbZHCdX.js";import"./DialogActions-CwuOrP_5.js";import"./ButtonGroupDivider-BvQ9mykg.js";import"./ChevronUp-B_5rOd5t.js";import"./ChevronDown-BUU9mFY7.js";import"./DropdownBase-BPVoSwrm.js";import"./useClickOutside-D32Y4FQp.js";import"./ButtonGroup-Bu9UDZzJ.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-vEAAYhB2.js";import"./ItemLink-6wM2985X.js";import"./DialogByline-CUy4sjIW.js";import"./DialogMetadata-D5OxVx5e.js";import"./DialogStatus-CRrcdUu1.js";import"./MetaItem-s12IRv8U.js";import"./ProgressIcon-DNSWfDlr.js";import"./Paperclip-DngzOU4W.js";import"./Files-D7_ErpUo.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await r(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await r(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await r(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=l.items[0],e=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{...e,controls:t.jsx(n,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,zt as __namedExportsOrder,Yt as default};
