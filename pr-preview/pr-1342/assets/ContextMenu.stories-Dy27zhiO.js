import{a7 as t}from"./iframe-ju2_P8cU.js";import{S as b}from"./ArrowRedo-7R4TBRH_.js";import{S as v}from"./EyeClosed-C3DvTq1l.js";import{S as I}from"./Archive-DxR_PIAA.js";import{S as k}from"./Trash-CVIa8LCo.js";import{S as w}from"./ClockDashed-7dwE9AIG.js";import{C as n}from"./ContextMenu-Btl7LJ1G.js";import{i as l}from"./inboxSearchResults-BinioqqX.js";import{S as u}from"./TeddyBear-DpC-d6_y.js";import{L as x}from"./List-CUFUNE10.js";import{D as d}from"./DialogListItem-CxdxK3W3.js";import{L as g}from"./ListItem-CMgPAGjD.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-QhPAjtom.js";import"./Dropdown-1f1KBVL6.js";import"./SearchField-DBcXR3Pi.js";import"./MagnifyingGlass-B6MeB1Gn.js";import"./FieldBase-B0oEW9Tf.js";import"./Typography-B5wbJTRa.js";import"./useHighlightedText-Ds75xSSg.js";import"./Field-BVh1vOLY.js";import"./Label-CCaZkUUa.js";import"./Input-DOMevMNG.js";import"./useMenu-C_YjP6fk.js";import"./MenuListItem-DYFDVXHn.js";import"./MenuListDivider-CKbzfKKF.js";import"./MenuListHeading-CawXvXz1.js";import"./MenuItem-CTnwjskA.js";import"./ItemMedia-BZfNDLpv.js";import"./Avatar-BseCFng7.js";import"./AvatarGroup-DlioajxJ.js";import"./Checkmark-DdndXx_3.js";import"./ItemLabel-DZZbZME8.js";import"./Heading-BwdjGJ12.js";import"./ItemControls-DCzps0Gu.js";import"./Badge-C5qbsRzf.js";import"./Tooltip-BIlU6ctt.js";import"./ChevronRight-C-B7qVOy.js";import"./InformationSquare-DxoPvZKH.js";import"./MenuElipsisHorizontal-B8s7-qPg.js";import"./dialogs-BwzoY8n7.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-C3w3QKS8.js";import"./AttachmentList-CV6yA1WI.js";import"./AttachmentLink-BycAdmwm.js";import"./File-C8H_1ix6.js";import"./Section-BBG26hDa.js";import"./Flex-BBjiPxTz.js";import"./TransmissionList-D05wu8ov.js";import"./Transmission-BYTyY5wG.js";import"./SeenByLog-C8tmCkhL.js";import"./SeenByLogItem-CIzJBabH.js";import"./Byline-C4m4OP28.js";import"./SeenByLogButton-BCVJE0Rh.js";import"./Divider-Cg9vCZeu.js";import"./DialogActions-D-KupCBT.js";import"./ButtonGroupDivider-CjMImbLT.js";import"./ChevronUp-DzbOnysK.js";import"./ChevronDown-DI9j-k90.js";import"./DropdownBase-DH3vLXFB.js";import"./useClickOutside-Bthoj2rt.js";import"./ButtonGroup-B2X4F04D.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CkWChTpa.js";import"./ItemLink-nv4hDnw7.js";import"./DialogByline-CwgnIzAz.js";import"./DialogMetadata-BuheGWxL.js";import"./DialogStatus-BrOxFSJc.js";import"./Paperclip-DW76aT0-.js";import"./Files-CunyTY3L.js";import"./MetaBase-qYJHz057.js";import"./MetaItem-Dj0JfCfW.js";import"./ProgressIcon-CSCsPZnu.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
