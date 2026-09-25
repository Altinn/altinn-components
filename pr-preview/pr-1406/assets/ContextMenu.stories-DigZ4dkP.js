import{a7 as t}from"./iframe-vkxhbe5D.js";import{S as b}from"./ArrowRedo-Da3wLF1n.js";import{S as v}from"./EyeClosed-CZ3nI7iO.js";import{S as I}from"./Archive-CztcWrse.js";import{S as k}from"./Trash-kbnaWOjj.js";import{S as w}from"./ClockDashed-CkaBwI9Z.js";import{C as n}from"./ContextMenu-BO0qnyJi.js";import{i as l}from"./inboxSearchResults-2Oo0fPb0.js";import{S as u}from"./TeddyBear-DxCL01x-.js";import{L as x}from"./List-BJAmkQFZ.js";import{D as d}from"./DialogListItem-Df1Eb0EI.js";import{L as g}from"./ListItem-CZ_cmVNu.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-Bj71dSIy.js";import"./Dropdown-DT6AevuE.js";import"./SearchField-CsfKU_3v.js";import"./MagnifyingGlass-BUxkWaxO.js";import"./FieldBase-BW43HWjL.js";import"./Typography-CiocPTHR.js";import"./useHighlightedText-DzpG-WJS.js";import"./Field-BcGRggAS.js";import"./Label-DJ_rl2vz.js";import"./Input-B9GDLkmV.js";import"./useMenu-pP3xGIIj.js";import"./MenuListItem-BToT8FwM.js";import"./MenuListDivider-DNPFWOP3.js";import"./MenuListHeading-DcoOXLFk.js";import"./MenuItem-CzOEvYQv.js";import"./ItemMedia-iOETwWXj.js";import"./Avatar-DCCKPKpG.js";import"./AvatarGroup-73OlPczV.js";import"./Checkmark-DIeTkJdw.js";import"./ItemLabel-C5WGMqIp.js";import"./Heading-BheO61Dl.js";import"./ItemControls-Dt4HN_B7.js";import"./Badge-B0jqz-MR.js";import"./Tooltip-BAvCNtSf.js";import"./ChevronRight-BjSUzT6t.js";import"./InformationSquare-BqHcnGOZ.js";import"./MenuElipsisHorizontal-CvNnMNOe.js";import"./dialogs-CSjzKMry.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-o3U3TaIv.js";import"./AttachmentList-D-976xEl.js";import"./AttachmentLink-5jPNJLwk.js";import"./File-la3290yk.js";import"./Section-OrN1j090.js";import"./Flex-C01l7uCb.js";import"./TransmissionList-Cng750Gz.js";import"./Transmission-CehURWIx.js";import"./SeenByLog-Dktt2CnJ.js";import"./SeenByLogItem-hRV_NZOZ.js";import"./Byline-BCI5L_Cr.js";import"./SeenByLogButton-9hJ4AWhy.js";import"./Divider-Bumy5We0.js";import"./DialogActions-CCJrKaJF.js";import"./ButtonGroupDivider-DyDsKVxf.js";import"./ChevronUp-BTS4WsVi.js";import"./ChevronDown-CQjb94KI.js";import"./DropdownBase-B8MLqDJg.js";import"./useClickOutside-BNwtTAxu.js";import"./ButtonGroup-Bd7c8rmX.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-C6j3qrdE.js";import"./ItemLink-OwzyFxZn.js";import"./DialogByline-Dr2_naVY.js";import"./DialogMetadata-CGVf-8e_.js";import"./DialogStatus-DloEqRF1.js";import"./Paperclip-CqBUMo5b.js";import"./Files-CFzqczVi.js";import"./MetaBase-CqzbNbd-.js";import"./MetaItem-Bqu0jDo4.js";import"./ProgressIcon-BueB7jYo.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
