import{a7 as t}from"./iframe-B0WoJH5H.js";import{S as b}from"./ArrowRedo-DLyyPYg9.js";import{S as v}from"./EyeClosed-DCmK9kvx.js";import{S as I}from"./Archive-BFiK2iNm.js";import{S as k}from"./Trash-CO6lVbOZ.js";import{S as w}from"./ClockDashed-BYruIMSN.js";import{C as i}from"./ContextMenu-Bjez-tdT.js";import{i as l}from"./inboxSearchResults-4cSUWNZ6.js";import{S as u}from"./TeddyBear-DzDaZGHr.js";import{L as x}from"./List-Cid-T8iG.js";import{D as d}from"./DialogListItem-BEMb4iw1.js";import{L as g}from"./ListItem-BtMv5Egs.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-CzjMq5Jo.js";import"./Dropdown-trRXYlHt.js";import"./SearchField-B4XHRk25.js";import"./MagnifyingGlass-BMHKxaiy.js";import"./FieldBase-HmzGYXkl.js";import"./Typography-BsE1w5gb.js";import"./useHighlightedText-BkoAp9J_.js";import"./Field-CdETmOUd.js";import"./Label-CQqygcqp.js";import"./Input-CGgDhHHk.js";import"./useMenu-BEojsPyg.js";import"./MenuListItem-DBrd4sth.js";import"./MenuListHeading-Czl8ffQE.js";import"./MenuItem-DWXRYnde.js";import"./ItemMedia-BWZiVBkm.js";import"./Avatar-DoqQG8m_.js";import"./AvatarGroup-CareQQNx.js";import"./Checkmark-szHKU0qA.js";import"./ItemLabel-3EoqOPb2.js";import"./Heading-DxONre_z.js";import"./ItemControls-AxIj9K4z.js";import"./Badge-D2udDyy3.js";import"./Tooltip-KSMOwJOX.js";import"./ChevronRight-DJgUHhg2.js";import"./index-BYFLACqY.js";import"./InformationSquare-C2uJAFQZ.js";import"./MenuElipsisHorizontal-rgMWcXSh.js";import"./dialogs-KJLrHSbX.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BmCzcfYg.js";import"./AttachmentList-1Uq_Rr5e.js";import"./AttachmentLink-ClD_OAFX.js";import"./File-B7lmk7eM.js";import"./Section-BK9NUwy5.js";import"./Flex-DKCofw-s.js";import"./TransmissionList-CTMOIRO6.js";import"./Transmission-6X8E9Jae.js";import"./SeenByLog-CAOqUjGx.js";import"./SeenByLogButton-qFhnAXQV.js";import"./SeenByLogItem-C-_g6QTO.js";import"./Byline-BoWA2cIz.js";import"./Divider-C-5FnIHP.js";import"./DialogActions-DXfD9GcV.js";import"./ButtonGroupDivider-Dra4Ourz.js";import"./ChevronUp-DUEhyOAc.js";import"./ChevronDown-BDG9HWsL.js";import"./DropdownBase-DbeTPi8c.js";import"./useClickOutside-BA_-KDNQ.js";import"./ButtonGroup-DflqcQYY.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-Dt0njuns.js";import"./ItemLink-Dz1AGHgC.js";import"./DialogByline-CrwbQB7p.js";import"./DialogMetadata-Jh5MNpxR.js";import"./DialogStatus-Dv0MTE6I.js";import"./MetaItem-BeIkdsjF.js";import"./ProgressIcon-gC9cSoYV.js";import"./Paperclip-BbrjzgEe.js";import"./Files-COpTmfvE.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,zt as __namedExportsOrder,Yt as default};
