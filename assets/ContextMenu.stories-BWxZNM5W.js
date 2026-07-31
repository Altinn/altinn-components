import{a7 as t}from"./iframe-CAjSv_nS.js";import{S as b}from"./ArrowRedo-CjQbPxnX.js";import{S as v}from"./EyeClosed-Kwh8D3eA.js";import{S as I}from"./Archive-D9_PLgbn.js";import{S as k}from"./Trash-CNWgj8JD.js";import{S as w}from"./ClockDashed-Bkab8kOk.js";import{C as n}from"./ContextMenu-BXFgsv5t.js";import{i as l}from"./inboxSearchResults-BGlK7bpj.js";import{S as u}from"./TeddyBear-CgSamqks.js";import{L as x}from"./List-Cb27YNZb.js";import{D as d}from"./DialogListItem-bIvcfaGB.js";import{L as g}from"./ListItem-tV3UUBFk.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-13HA63ON.js";import"./Dropdown-CFFHqeqH.js";import"./SearchField-BeyrM52L.js";import"./MagnifyingGlass-BZEvKjAk.js";import"./FieldBase-B3aukQxa.js";import"./Typography-CP4EAHNP.js";import"./useHighlightedText-BhVVUcDt.js";import"./Field-D8Qe0uka.js";import"./Label-CjI2CUCN.js";import"./Input-BnE3VUoY.js";import"./useMenu-DNlZtc9u.js";import"./MenuListItem-Cr3RaesB.js";import"./MenuListDivider-Cl5vSJ7C.js";import"./MenuListHeading-DK632LaI.js";import"./MenuItem-C500ZIIj.js";import"./ItemMedia-DCE7hmVr.js";import"./Avatar-CgMczA0n.js";import"./AvatarGroup-ujKKLt3E.js";import"./Checkmark-Da_1rBde.js";import"./ItemLabel-JZ_7_TI1.js";import"./Heading-Dl2CB_qz.js";import"./ItemControls-C86-eNC3.js";import"./Badge-Dlsqw5tH.js";import"./Tooltip-DmTt27sC.js";import"./ChevronRight-DBCR3hzH.js";import"./InformationSquare-CA9knMPH.js";import"./MenuElipsisHorizontal-BDVfbbpF.js";import"./dialogs-C4Y8wuH7.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BoV4gg-8.js";import"./AttachmentList-Ck51gZdn.js";import"./AttachmentLink-C_Tys8W8.js";import"./File-CihFSu03.js";import"./Section-QeF7xouO.js";import"./Flex-Dkl3V3J_.js";import"./TransmissionList-C9_3kViu.js";import"./Transmission-Cd83I5Yh.js";import"./SeenByLog-BDx7g_GQ.js";import"./SeenByLogItem-f8aeo_x4.js";import"./Byline-Cj2qEBxk.js";import"./SeenByLogButton-D8a_YyrL.js";import"./Divider-DwgePPkW.js";import"./DialogActions-CYtU1hq0.js";import"./ButtonGroupDivider-CHEKOlvW.js";import"./ChevronUp-CiQ1vTJ_.js";import"./ChevronDown-DV1YpklV.js";import"./DropdownBase-Ctkr1KOn.js";import"./useClickOutside-DQOP9bod.js";import"./ButtonGroup-CHaM1dTc.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-Bsx8jWac.js";import"./ItemLink-BmhLdRET.js";import"./DialogByline-CefEvnjS.js";import"./DialogMetadata-CC70EvH5.js";import"./DialogStatus-ZDQgroPL.js";import"./Paperclip-C798-5-B.js";import"./Files-6yoCPIHr.js";import"./MetaBase-Dy0rlWoO.js";import"./MetaItem-_OkH00m8.js";import"./ProgressIcon-BKvfwEDx.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
