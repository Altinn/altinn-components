import{a7 as t}from"./iframe-BlyVQ5Wf.js";import{S as b}from"./ArrowRedo-C38S4LMB.js";import{S as v}from"./EyeClosed-Qg1xwdx4.js";import{S as I}from"./Archive-yxqFfZrS.js";import{S as k}from"./Trash-Bw2W8ER7.js";import{S as w}from"./ClockDashed-CwCpt9-J.js";import{C as n}from"./ContextMenu-CE0uRI4u.js";import{i as l}from"./inboxSearchResults-N6vgALGO.js";import{S as u}from"./TeddyBear-CYzAovCx.js";import{L as x}from"./List-DMggTgT6.js";import{D as d}from"./DialogListItem-js8pA2B7.js";import{L as g}from"./ListItem-nb3WHA4w.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-9ebtaTAF.js";import"./Dropdown-D4yTY22u.js";import"./SearchField-DB7B9m_1.js";import"./MagnifyingGlass-DUa4q_J4.js";import"./FieldBase-CZEUpIPU.js";import"./Typography-xETneU90.js";import"./useHighlightedText-DCg_XHxB.js";import"./Field-CitCeqKK.js";import"./Label-B4XhPvWK.js";import"./Input-7ZkrUdZt.js";import"./useMenu-DUnPL890.js";import"./MenuListItem-u2C1cR8C.js";import"./MenuListDivider-DBzJeO3_.js";import"./MenuListHeading-HVvc_FIB.js";import"./MenuItem-Bv74nrne.js";import"./ItemMedia-BlQhkodk.js";import"./Avatar-DQIgsQd2.js";import"./AvatarGroup-6IOgo5me.js";import"./Checkmark-CAhepm8i.js";import"./ItemLabel-CF-a0vLD.js";import"./Heading-hWvyrxAT.js";import"./ItemControls-B0XNXszg.js";import"./Badge-BWoBgQxU.js";import"./Tooltip-DIerloK1.js";import"./ChevronRight-C0zIwyjD.js";import"./InformationSquare-CSNu4leW.js";import"./MenuElipsisHorizontal-DyvtEdX9.js";import"./dialogs-BBzbWSbO.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DzcLP2c6.js";import"./AttachmentList-CpEFj7g3.js";import"./AttachmentLink-CfacrKMy.js";import"./File-BAjdS3gQ.js";import"./Section-_AUVgHqB.js";import"./Flex-CGPMEzYL.js";import"./TransmissionList-Bx0-XxT5.js";import"./Transmission-C1UnPwyW.js";import"./SeenByLog-DgtTEagv.js";import"./SeenByLogItem-CepS-NNw.js";import"./Byline-DGNmbHlc.js";import"./SeenByLogButton-De7EoLyh.js";import"./Divider-Dz1yzn0C.js";import"./DialogActions-CPsHk8jk.js";import"./ButtonGroupDivider-C6lBSkQo.js";import"./ChevronUp-CFGBj1-_.js";import"./ChevronDown-Bxa_Upno.js";import"./DropdownBase-CWtlvkAI.js";import"./useClickOutside-VsqQIwd7.js";import"./ButtonGroup-ksQ-pxhG.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-hJkByUlC.js";import"./ItemLink-DBmDtdx9.js";import"./DialogByline-zFApEva4.js";import"./DialogMetadata-BpnE1Kew.js";import"./DialogStatus-Ce1KQNBf.js";import"./Paperclip-43gP-RI6.js";import"./Files-Cudlgojf.js";import"./MetaBase-CCeGg9s-.js";import"./MetaItem-vpv9uHUA.js";import"./ProgressIcon-BGakjZwZ.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    await expect(body.getAllByRole('menu')[0]).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...s.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Gt as __namedExportsOrder,zt as default};
