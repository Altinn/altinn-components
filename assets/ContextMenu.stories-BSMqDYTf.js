import{a7 as t}from"./iframe-qmQCxFa-.js";import{S as b}from"./ArrowRedo-Botvj-Xd.js";import{S as v}from"./EyeClosed-kEtkWEpN.js";import{S as I}from"./Archive-C5MJ9MzP.js";import{S as k}from"./Trash-Bwnj9cI7.js";import{S as w}from"./ClockDashed-D21SJp05.js";import{C as n}from"./ContextMenu-BKNR-8e0.js";import{i as l}from"./inboxSearchResults-Yb8gdjL7.js";import{S as u}from"./TeddyBear-DOE7-87X.js";import{L as x}from"./List-66Jmre4e.js";import{D as d}from"./DialogListItem-DSPpKx6U.js";import{L as g}from"./ListItem-TUtQYaSN.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-D_F6_m9G.js";import"./Dropdown-Bfr6s4KY.js";import"./SearchField-yI2IHctk.js";import"./MagnifyingGlass-BEFsIwDK.js";import"./FieldBase-uaodyCSq.js";import"./Typography-CwhPNAxM.js";import"./useHighlightedText-DvW-80BF.js";import"./Field-CR7g45g-.js";import"./Label-p7H0Mohi.js";import"./Input-UWmslA08.js";import"./useMenu-BTzsKN7O.js";import"./MenuListItem-BJU-5Qr1.js";import"./MenuListDivider-lNR4js8T.js";import"./MenuListHeading-DI3xzslm.js";import"./MenuItem-BJ0MSgwv.js";import"./ItemMedia-Ch0GCbf9.js";import"./Avatar-GyPerWGw.js";import"./AvatarGroup-DMtwNmnR.js";import"./Checkmark-Dr10MfLv.js";import"./ItemLabel-DQygMXqb.js";import"./Heading-BfhEliS6.js";import"./ItemControls-BNv7LYwf.js";import"./Badge-B_bsLQj9.js";import"./Tooltip-B9panzD0.js";import"./ChevronRight-D4PJikp-.js";import"./InformationSquare-dfx4dBae.js";import"./MenuElipsisHorizontal-BZ2CkxHW.js";import"./dialogs-C1ofy8IV.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BJtKV4vO.js";import"./AttachmentList-DUwJlXIt.js";import"./AttachmentLink-C57g2r8L.js";import"./File-BT9W-TnA.js";import"./Section-DIAhVmeV.js";import"./Flex-Da8DWGDO.js";import"./TransmissionList-DGM8AMl7.js";import"./Transmission-Bjeoyyu9.js";import"./SeenByLog-C7HZ8LIv.js";import"./SeenByLogItem-RRCdgW1c.js";import"./Byline-CWK2h7MN.js";import"./SeenByLogButton-B4NA368J.js";import"./Divider-Ct2eo3IY.js";import"./DialogActions-CKuIn-Q7.js";import"./ButtonGroupDivider-Q5Oe8DbS.js";import"./ChevronUp-D-ejY9oL.js";import"./ChevronDown-B2_8CHiS.js";import"./DropdownBase-Cw3BuYMz.js";import"./useClickOutside-HSwIF6Ce.js";import"./ButtonGroup-_CfbD1Th.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-BQ6Vg0LW.js";import"./ItemLink-CpI2Nssx.js";import"./DialogByline-9hOgv3zR.js";import"./DialogMetadata-Jm6QIuYW.js";import"./DialogStatus-UT2FflqU.js";import"./Paperclip-CI5w_XIV.js";import"./Files-CjQC65KT.js";import"./MetaBase-DC-fWdUB.js";import"./MetaItem-DmpQEz56.js";import"./ProgressIcon-CUynSe1n.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
