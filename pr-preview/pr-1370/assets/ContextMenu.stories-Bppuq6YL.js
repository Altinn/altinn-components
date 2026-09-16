import{a7 as t}from"./iframe-DJnynaCo.js";import{S as b}from"./ArrowRedo-Bltb0E5Z.js";import{S as v}from"./EyeClosed-CacEZlwe.js";import{S as I}from"./Archive-Dx_-h2dD.js";import{S as k}from"./Trash-CbXj-0_h.js";import{S as w}from"./ClockDashed-BbIL2d3l.js";import{C as n}from"./ContextMenu-lI42Papp.js";import{i as l}from"./inboxSearchResults-B0isORcQ.js";import{S as u}from"./TeddyBear-Dlsk-NzG.js";import{L as x}from"./List-BTkgKM-8.js";import{D as d}from"./DialogListItem-BAluDw1h.js";import{L as g}from"./ListItem-B8Ai6_1A.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-CZOriFGV.js";import"./Dropdown-DqJi5yfL.js";import"./SearchField-DQ5LjUme.js";import"./MagnifyingGlass-D5ryHey3.js";import"./FieldBase-D0EiQS06.js";import"./Typography-CiLhkoi6.js";import"./useHighlightedText-CYNOolzk.js";import"./Field-CUMpXqzl.js";import"./Label-DeMCQWn2.js";import"./Input-BYb8Xo7l.js";import"./useMenu-Dk5q8tzl.js";import"./MenuListItem-Ci9AWxXv.js";import"./MenuListDivider-B4GlA6zr.js";import"./MenuListHeading-DcFAqgb-.js";import"./MenuItem-MEQzSQZF.js";import"./ItemMedia-UE0Xgjah.js";import"./Avatar-BkXKEErw.js";import"./AvatarGroup-C7fA72SD.js";import"./Checkmark-b-ALmYFM.js";import"./ItemLabel-CWPkZwXM.js";import"./Heading-DlyjjAZZ.js";import"./ItemControls-CHuQfTIH.js";import"./Badge-CnaY1St8.js";import"./Tooltip-D6A63mE4.js";import"./ChevronRight-C7aaNXCF.js";import"./InformationSquare-Bwpxsw1g.js";import"./MenuElipsisHorizontal-q9aEJHux.js";import"./dialogs-O4w1cxJE.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CKVdEA67.js";import"./AttachmentList-0qVrXJbK.js";import"./AttachmentLink-_cNfy320.js";import"./File-DOL3PZpu.js";import"./Section-CrYFAueX.js";import"./Flex-DolhwIS-.js";import"./TransmissionList-BFnXYjAq.js";import"./Transmission-DxYujY2_.js";import"./SeenByLog-Kf7_kh9c.js";import"./SeenByLogItem-BqCD9pVr.js";import"./Byline-BXy67g1G.js";import"./SeenByLogButton-DJnr-de4.js";import"./Divider-DvU8eZEJ.js";import"./DialogActions-DH17qvi6.js";import"./ButtonGroupDivider-C1U5tzI_.js";import"./ChevronUp-BZfYUYCO.js";import"./ChevronDown-CYeA95Pw.js";import"./DropdownBase-CHz50_2E.js";import"./useClickOutside-CG4WX_1M.js";import"./ButtonGroup-BNd80tZA.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-B5VYCo0l.js";import"./ItemLink-1GRrmWZq.js";import"./DialogByline-vg5fxGoM.js";import"./DialogMetadata-CGMsKKfw.js";import"./DialogStatus-CGVNhc4I.js";import"./Paperclip-BABKEy81.js";import"./Files-Bk5iyqsK.js";import"./MetaBase-DYHTSDaT.js";import"./MetaItem-Cibrghx0.js";import"./ProgressIcon-7aq1lKhx.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
