import{a7 as t}from"./iframe-BlxKDeRn.js";import{S as b}from"./ArrowRedo-CXZF-sks.js";import{S as v}from"./EyeClosed-CSF-qmn3.js";import{S as I}from"./Archive-CMR8k7pg.js";import{S as k}from"./Trash-epouAA_y.js";import{S as w}from"./ClockDashed-CAqZBcnZ.js";import{C as i}from"./ContextMenu-DJmCRmo5.js";import{i as l}from"./inboxSearchResults-IZmH5OeH.js";import{S as u}from"./TeddyBear-WJay5GvS.js";import{L as x}from"./List-BGZiCtwn.js";import{D as d}from"./DialogListItem-BO8hu1rF.js";import{L as g}from"./ListItem-DMwUq-qc.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-_els-HSa.js";import"./Dropdown-CwQ5F4MG.js";import"./SearchField-CTOOlDoc.js";import"./MagnifyingGlass-7o9KBuEd.js";import"./FieldBase-_XE-YVEJ.js";import"./Typography-CdulF3LZ.js";import"./useHighlightedText-Cf7684f7.js";import"./Field-043F-93h.js";import"./Label-DcRYrAWF.js";import"./Input-CXwaRbp1.js";import"./useMenu-BkS0Vn46.js";import"./MenuListItem-BhvFARid.js";import"./MenuListDivider-Qd7Zv5zm.js";import"./MenuListHeading-yiM716YP.js";import"./MenuItem-npmNxACF.js";import"./ItemMedia-DfJvZXBe.js";import"./Avatar-CNS7uviy.js";import"./AvatarGroup-Cv5UWI0K.js";import"./Checkmark-Bl2r91uW.js";import"./ItemLabel-BJ4TUmk_.js";import"./Heading-PlHpJzKQ.js";import"./ItemControls-DiLtTH9A.js";import"./Badge-9tYEKd9T.js";import"./Tooltip-ZQ8pGHyK.js";import"./ChevronRight-DNG7F-LS.js";import"./InformationSquare-D-Ph66nw.js";import"./MenuElipsisHorizontal-Dj8zKARE.js";import"./dialogs-BtwEizXu.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CsZ32rOp.js";import"./AttachmentList-nz3R8Pw_.js";import"./AttachmentLink-BryqBr--.js";import"./File-BK7UU44O.js";import"./Section-phQiwh1A.js";import"./Flex-ETYKhAb5.js";import"./TransmissionList-BAUSb735.js";import"./Transmission-DKBJ5VDy.js";import"./SeenByLog-BUVwuuIP.js";import"./SeenByLogButton-Dz1Rzzfc.js";import"./SeenByLogItem-eqLEZUxG.js";import"./Byline-czkz-Lsc.js";import"./Divider-COAbRQ2x.js";import"./DialogActions-CMZgdns9.js";import"./ButtonGroupDivider-BFRswpZA.js";import"./ChevronUp-BgX0VOdQ.js";import"./ChevronDown-DW-ZLG_4.js";import"./DropdownBase-B-OsWkoB.js";import"./useClickOutside-3lO65kOc.js";import"./ButtonGroup-WgKm7hCp.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-C3ArhSiR.js";import"./ItemLink-CTQIRsl2.js";import"./DialogByline-B4Ze3mdU.js";import"./DialogMetadata-CThb56Li.js";import"./DialogStatus-7mg--0Jl.js";import"./MetaItem-eICg8aNj.js";import"./ProgressIcon-D2BAZTqb.js";import"./Paperclip-DHPCQAWG.js";import"./Files-DRy3Y70T.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
