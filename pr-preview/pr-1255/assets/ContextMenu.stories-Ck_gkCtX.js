import{a7 as t}from"./iframe-h3kpEY-8.js";import{S as b}from"./ArrowRedo-Cz6ra2PD.js";import{S as v}from"./EyeClosed-Z3CkMaJk.js";import{S as I}from"./Archive-C2zjgILp.js";import{S as k}from"./Trash-Bbf21dp0.js";import{S as w}from"./ClockDashed-BJgLHY99.js";import{C as n}from"./ContextMenu-CoG70u__.js";import{i as l}from"./inboxSearchResults-yoAqBsvT.js";import{S as u}from"./TeddyBear-nmPgGWKb.js";import{L as x}from"./List-BrnOjuxG.js";import{D as d}from"./DialogListItem-wmFOhUTa.js";import{L as g}from"./ListItem-De57F-VP.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-BHvOgZtq.js";import"./Dropdown-BZC5Raej.js";import"./SearchField-pLL_WmAV.js";import"./MagnifyingGlass-Df6AiRyH.js";import"./FieldBase-CnX5WdHy.js";import"./Typography-ByLPxgtz.js";import"./useHighlightedText-Lwubglq6.js";import"./Field-BzJVbJyd.js";import"./Label-DRrcRV0r.js";import"./Input-BilJ5YTK.js";import"./useMenu-DIh14msT.js";import"./MenuListItem-DdKH3BDS.js";import"./MenuListDivider-BDzgWude.js";import"./MenuListHeading-B8DJ5av2.js";import"./MenuItem-CJxVZTG4.js";import"./ItemMedia-DOHb0jsR.js";import"./Avatar-xrrnEYLD.js";import"./AvatarGroup-COWd8M-x.js";import"./Checkmark-qxd_V6S7.js";import"./ItemLabel-DwG1GkVg.js";import"./Heading-Dn7fEFx7.js";import"./ItemControls-DTSXitWE.js";import"./Badge-DXobaynz.js";import"./Tooltip-DgP5yGn4.js";import"./ChevronRight-zeeAR8pp.js";import"./index-BRnuOkic.js";import"./InformationSquare-TM9O4ixW.js";import"./MenuElipsisHorizontal-DBgqCiOI.js";import"./dialogs-DLJpsozL.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DLdUx4oy.js";import"./AttachmentList-D2dCb-Ry.js";import"./AttachmentLink-BYt6Zfgx.js";import"./File-CTz_kpJX.js";import"./Section-CgbWqpsb.js";import"./Flex-BmiGVQGS.js";import"./TransmissionList-Ci942cuI.js";import"./Transmission-CwBj2156.js";import"./SeenByLog-Dge3Ncii.js";import"./SeenByLogButton-DmHDhIih.js";import"./SeenByLogItem-DdhV7bTI.js";import"./Byline-iQF-_OTI.js";import"./Divider-BULkqhJ0.js";import"./DialogActions-CumBJey4.js";import"./ButtonGroupDivider-7RlVPC7z.js";import"./ChevronUp-ChyOGEvh.js";import"./ChevronDown-lfOvIfMJ.js";import"./DropdownBase-D0GHUdFy.js";import"./useClickOutside-D-ekcfAz.js";import"./ButtonGroup-CTYKvx28.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-C2eJ02ZF.js";import"./ItemLink-CuqdYmxq.js";import"./DialogByline-Djp3aO8F.js";import"./DialogMetadata-BjiAE3OZ.js";import"./DialogStatus-BXzcBIWd.js";import"./MetaItem-CMDcTvNr.js";import"./ProgressIcon-BLQ1CkOa.js";import"./Paperclip-BQH5LpcS.js";import"./Files-FXb4jNiz.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
