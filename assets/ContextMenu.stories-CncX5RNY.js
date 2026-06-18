import{a7 as t}from"./iframe-3eub8g81.js";import{S as b}from"./ArrowRedo-4k0hcQBA.js";import{S as v}from"./EyeClosed-ESie-s9R.js";import{S as I}from"./Archive-DyLG6tnj.js";import{S as k}from"./Trash-BuKvObXQ.js";import{S as w}from"./ClockDashed-hSXEbS1C.js";import{C as i}from"./ContextMenu-y8zF4E0Z.js";import{i as l}from"./inboxSearchResults-CuAIAJjd.js";import{S as u}from"./TeddyBear-lpVUgyBd.js";import{L as x}from"./List-Bd4lewsS.js";import{D as d}from"./DialogListItem-3XEcZZcH.js";import{L as g}from"./ListItem-Y8YYbtC7.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-F3dY1VLA.js";import"./Dropdown-D34Rh-FK.js";import"./SearchField-DQomiBHs.js";import"./MagnifyingGlass-BjeT7HiQ.js";import"./FieldBase-C1gDTj8R.js";import"./Typography-BfGFMo_X.js";import"./useHighlightedText-D_KrHTcm.js";import"./Field-BEYcEfWR.js";import"./Label-Dn1DYcv0.js";import"./Input-C_lNMvAW.js";import"./useMenu-DENMRGmJ.js";import"./MenuListItem-kYkVg98b.js";import"./MenuListDivider-Bx6VzZCp.js";import"./MenuListHeading-lAZfEwXv.js";import"./MenuItem-CSF12lCK.js";import"./ItemMedia-BB_XOZ97.js";import"./Avatar-CwYCtPFD.js";import"./AvatarGroup-5atDHYqT.js";import"./Checkmark-CY-7WOxt.js";import"./ItemLabel-CEuTRmIa.js";import"./Heading-Cn9WCavo.js";import"./ItemControls-DXPiBYKt.js";import"./Badge-CMPSGpEc.js";import"./Tooltip-egZN2oaV.js";import"./ChevronRight-BS_VcXFa.js";import"./InformationSquare-CORGNNV5.js";import"./MenuElipsisHorizontal-C9pt0hzq.js";import"./dialogs-B6gqZPI1.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DPiKkBuy.js";import"./AttachmentList-CloLe5Jw.js";import"./AttachmentLink-DleuS7ZL.js";import"./File-DbQdBAfX.js";import"./Section-B8LCASv-.js";import"./Flex-DeWs0m9L.js";import"./TransmissionList-B6lJ4tka.js";import"./Transmission-I56N5WUL.js";import"./SeenByLog-CNr-G6p5.js";import"./SeenByLogButton-D4953sjW.js";import"./SeenByLogItem-DVJfkgJs.js";import"./Byline-CCy36c-a.js";import"./Divider-CjLXSzl6.js";import"./DialogActions-SuxKNt4m.js";import"./ButtonGroupDivider-CcfY_W-p.js";import"./ChevronUp-B-pU4SPo.js";import"./ChevronDown-ByzAyPe6.js";import"./DropdownBase-CoNL6MS8.js";import"./useClickOutside-CFRcesg8.js";import"./ButtonGroup-D2aDB7np.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-Dkp179g5.js";import"./ItemLink-BMVyW3FY.js";import"./DialogByline-ChcJawqY.js";import"./DialogMetadata-BzVtAFqh.js";import"./DialogStatus-Cp0J1sbK.js";import"./MetaItem-C4AyZzzp.js";import"./ProgressIcon-CUpZ2qWi.js";import"./Paperclip-BAqZrYSe.js";import"./Files-DvnUNzn5.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
