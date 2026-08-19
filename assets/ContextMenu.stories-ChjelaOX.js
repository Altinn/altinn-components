import{a7 as t}from"./iframe-Dvni_u8W.js";import{S as b}from"./ArrowRedo-CRah1S5y.js";import{S as v}from"./EyeClosed-CDcoW8Ix.js";import{S as I}from"./Archive-D9xo3Eat.js";import{S as k}from"./Trash-0Q12wXYH.js";import{S as w}from"./ClockDashed-Q2_U0oNh.js";import{C as n}from"./ContextMenu-DLU0U19W.js";import{i as l}from"./inboxSearchResults-3m3iGz6d.js";import{S as u}from"./TeddyBear-CNe2OzRN.js";import{L as x}from"./List-Dh2JDjT0.js";import{D as d}from"./DialogListItem-CpeUWX_6.js";import{L as g}from"./ListItem-Bbbg2QAe.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-C43pfIK4.js";import"./Dropdown-BFgXRZ9P.js";import"./SearchField-CJEH8bYw.js";import"./MagnifyingGlass-B8ciBt3W.js";import"./FieldBase-ChKWoxnf.js";import"./Typography-UWzQw34I.js";import"./useHighlightedText-CLLTD9Wh.js";import"./Field-BLs2k9pR.js";import"./Label-BsuoA68K.js";import"./Input-B7CJ0KIf.js";import"./useMenu-wTmWM5n-.js";import"./MenuListItem-9RJKOuM7.js";import"./MenuListDivider-CKiSBLyr.js";import"./MenuListHeading-CHgDesLl.js";import"./MenuItem-DOQN-kDc.js";import"./ItemMedia-BulytyAO.js";import"./Avatar-BiSp7bMb.js";import"./AvatarGroup-BKR8NZ9M.js";import"./Checkmark-BJLEGQFS.js";import"./ItemLabel-BnI0oSfj.js";import"./Heading-CzH7HB6a.js";import"./ItemControls-C8iXC4AM.js";import"./Badge-COuasLz3.js";import"./Tooltip-C31Zzbir.js";import"./ChevronRight-CHz63rRB.js";import"./InformationSquare-ZFR98d1q.js";import"./MenuElipsisHorizontal-ChUvvCwa.js";import"./dialogs-B-aJm8Pl.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CCETmcNK.js";import"./AttachmentList-Dbu8xaXY.js";import"./AttachmentLink-CKWyuJWk.js";import"./File-DcYi9Dt9.js";import"./Section-CvMDXfkz.js";import"./Flex-C0xjv22N.js";import"./TransmissionList-sbOxNS-H.js";import"./Transmission-bpCDNr99.js";import"./SeenByLog-B0Ps7geD.js";import"./SeenByLogItem-DKF7ayI4.js";import"./Byline-nZjd9pzD.js";import"./SeenByLogButton-1fPu8lbH.js";import"./Divider-4VO8Bne5.js";import"./DialogActions-d_NH3ChG.js";import"./ButtonGroupDivider-DrubGLDP.js";import"./ChevronUp-B-cuVFt7.js";import"./ChevronDown-wy-_efuj.js";import"./DropdownBase-PlhKJaEI.js";import"./useClickOutside-BK0tljaq.js";import"./ButtonGroup-ChfLiHIR.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-Dhpm696r.js";import"./ItemLink-DONwvW-Z.js";import"./DialogByline-C4V25UDX.js";import"./DialogMetadata-C7r07tKU.js";import"./DialogStatus-dFuQO10h.js";import"./Paperclip-BbwtVfyo.js";import"./Files-CO9xL_TH.js";import"./MetaBase-DjGn128_.js";import"./MetaItem-CbFCiTzM.js";import"./ProgressIcon-EDXw5W1q.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
