import{a7 as t}from"./iframe-CdYVD6SD.js";import{S as b}from"./ArrowRedo-DAysNzb5.js";import{S as v}from"./EyeClosed-DYsvG0hP.js";import{S as I}from"./Archive-NYL17u-9.js";import{S as k}from"./Trash-Xory4lRl.js";import{S as w}from"./ClockDashed-CnOrWZDE.js";import{C as n}from"./ContextMenu-Dh3e6JFy.js";import{i as l}from"./inboxSearchResults-CFYod6l1.js";import{S as u}from"./TeddyBear-BEQJcC5M.js";import{L as x}from"./List-BOSoX1au.js";import{D as d}from"./DialogListItem-B905a5nb.js";import{L as g}from"./ListItem-18oaQRPM.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-DJh2Guga.js";import"./Dropdown-BNNn4VPY.js";import"./SearchField-B_NM7GXp.js";import"./MagnifyingGlass-Cgduw8_l.js";import"./FieldBase-NvZtAXfB.js";import"./Typography-Dba7VpUA.js";import"./useHighlightedText-DItA3cBY.js";import"./Field-DkF-iZgl.js";import"./Label-lXTSTWmW.js";import"./Input-CF984aoc.js";import"./useMenu-CR8oLL1i.js";import"./MenuListItem-LpLMf6qu.js";import"./MenuListDivider-BO0zxfeS.js";import"./MenuListHeading-CKDNZjFs.js";import"./MenuItem-CJ_NtT0h.js";import"./ItemMedia-BIl5Wxj2.js";import"./Avatar-fMwGn-3G.js";import"./AvatarGroup-BXTj0nvd.js";import"./Checkmark-DT64LcTm.js";import"./ItemLabel-DvFew2uy.js";import"./Heading-Kaqd1h94.js";import"./ItemControls-vidWw2G8.js";import"./Badge-DuyiKzKp.js";import"./Tooltip-Vr6xk2hm.js";import"./ChevronRight-Dr5zJkhS.js";import"./index-D2d8PfjQ.js";import"./InformationSquare-Bk7KLwd3.js";import"./MenuElipsisHorizontal-BPjsS_Dz.js";import"./dialogs-BG3x-rmp.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CHHP5Jrp.js";import"./AttachmentList-DpAOWkVA.js";import"./AttachmentLink-DXG_uO30.js";import"./File-B4QXTfBu.js";import"./Section-Dk-Ohevy.js";import"./Flex-Cyvp2qjC.js";import"./TransmissionList-DBRmbOD4.js";import"./Transmission-JnkOwyfE.js";import"./SeenByLog-DnrkzCoA.js";import"./SeenByLogButton-BGDPfFLN.js";import"./SeenByLogItem-uxoD8ctX.js";import"./Byline-HslkVsL1.js";import"./Divider-Bd953ap4.js";import"./DialogActions-Dp5t1V1s.js";import"./ButtonGroupDivider-BkcWguro.js";import"./ChevronUp-BrRMdaLP.js";import"./ChevronDown-C8P1GjsS.js";import"./DropdownBase-4AmEyn8i.js";import"./useClickOutside-D5D1mEo_.js";import"./ButtonGroup-B-NgaNCB.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-KuqrX7JT.js";import"./ItemLink-CU-HlXOq.js";import"./DialogByline-CXa7lzry.js";import"./DialogMetadata-DYdIfygN.js";import"./DialogStatus-DAyK5YT8.js";import"./MetaItem-DqzpQkz7.js";import"./ProgressIcon-DOZoFN3G.js";import"./Paperclip-iQylup-O.js";import"./Files-B2DfmFyY.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
