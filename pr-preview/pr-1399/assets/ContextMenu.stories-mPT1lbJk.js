import{a7 as t}from"./iframe-Bjjt_sJ1.js";import{S as b}from"./ArrowRedo-HjRVT5N6.js";import{S as v}from"./EyeClosed-P6MgQW2z.js";import{S as I}from"./Archive-DGmdwpez.js";import{S as k}from"./Trash-BgkXZGdB.js";import{S as w}from"./ClockDashed-Dou1qfdz.js";import{C as n}from"./ContextMenu-BqCCj7wW.js";import{i as l}from"./inboxSearchResults-RtrcOU3v.js";import{S as u}from"./TeddyBear-ZOC01Flx.js";import{L as x}from"./List-DIqwgyys.js";import{D as d}from"./DialogListItem-Cf6ocZFh.js";import{L as g}from"./ListItem-C0qHzDdu.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-zn5n7TQt.js";import"./Dropdown-CeLlk6Ua.js";import"./SearchField-CN96vdWl.js";import"./MagnifyingGlass-B6DdP_wu.js";import"./FieldBase-xSixxw66.js";import"./Typography-D6uVUzG3.js";import"./useHighlightedText-BPKtv5Uu.js";import"./Field-Cv6yJUU5.js";import"./Label-DSP8_VuM.js";import"./Input-PLxdr44a.js";import"./useMenu-CfDnO3tS.js";import"./MenuListItem-CebbbonR.js";import"./MenuListDivider-CP2Z2JTV.js";import"./MenuListHeading-NxhgYwSy.js";import"./MenuItem-Cqr4SOJp.js";import"./ItemMedia-cRp9TeR0.js";import"./Avatar-DUGxJuve.js";import"./AvatarGroup-Bt2kizFo.js";import"./Checkmark-BJpweToD.js";import"./ItemLabel-C7-OFrDm.js";import"./Heading-BHJvhrmD.js";import"./ItemControls-Cf0gBB0S.js";import"./Badge-Dlcy0_mS.js";import"./Tooltip-CYcMXzzg.js";import"./ChevronRight-MBNaUHNp.js";import"./InformationSquare-BBRKQU3y.js";import"./MenuElipsisHorizontal-288HpaRD.js";import"./dialogs-CC7eKDGq.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-60Ck4wTf.js";import"./AttachmentList-D85FmEec.js";import"./AttachmentLink-CwGU8Y82.js";import"./File-BifymGtc.js";import"./Section-DbOZVIjc.js";import"./Flex-GHRWEM3Q.js";import"./TransmissionList-CRuWN2i0.js";import"./Transmission-k7bDMaXv.js";import"./SeenByLog-BwBAtc2J.js";import"./SeenByLogItem-DOY6v6Xi.js";import"./Byline-BHcnyvRN.js";import"./SeenByLogButton-BXKbU-id.js";import"./Divider-DzalYy47.js";import"./DialogActions-rFzq7dvh.js";import"./ButtonGroupDivider-C-f0tc_z.js";import"./ChevronUp-C-n4hHxG.js";import"./ChevronDown-C4cxiit8.js";import"./DropdownBase-D1lcO8et.js";import"./useClickOutside-5J3oT4vJ.js";import"./ButtonGroup-uHmrofaO.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DDpnq5qx.js";import"./ItemLink-BbRKplZ0.js";import"./DialogByline-SHoqSfNk.js";import"./DialogMetadata-B9ZkYG4e.js";import"./DialogStatus-CzB9J6cM.js";import"./Paperclip-B9jawDMs.js";import"./Files-BFp85XKT.js";import"./MetaBase-D4Xieoi-.js";import"./MetaItem-D2aT0PUb.js";import"./ProgressIcon-BxS4TZ2g.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
