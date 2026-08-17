import{a7 as o}from"./iframe-ju2_P8cU.js";import{u as S}from"./useProfileLayout-BB1V7PZW.js";import{u as c,B as g}from"./useBookmarks-BGF_PdmR.js";import{L as k}from"./Layout-BgLQmeBd.js";import{P as x}from"./PageBase-CUQC6DiD.js";import{H as p}from"./Heading-BwdjGJ12.js";import{T as b}from"./Toolbar-Or2Bncvt.js";import{B as I}from"./BookmarkModal-D0KrhIKA.js";import{u as h}from"./useInboxLayout-BwNgTq62.js";import{u as f}from"./useAccountMenu-BiJrT8rU.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-CVku7E_F.js";import"./Bell-Cqbuk4aR.js";import"./Bookmark-HI6dxZQb.js";import"./ClockDashed-7dwE9AIG.js";import"./globalMenu-BQN6T81z.js";import"./PersonCircle-C_rQa6TJ.js";import"./Buildings2-DXN57OJJ.js";import"./InboxFill-Bru-lmu8.js";import"./MenuGrid-BLSZyrUU.js";import"./MagnifyingGlass-B6MeB1Gn.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-DxR_PIAA.js";import"./Trash-CVIa8LCo.js";import"./useLayout-nXs91-EA.js";import"./useLocale-CwFQ-_r0.js";import"./header-caYn548k.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-C_YjP6fk.js";import"./BookmarkSettingsItem-Dez9HcK-.js";import"./QueryLabel-BSdNDfg5.js";import"./Plus-Bezfg3ws.js";import"./SettingsItemBase-ByQ-5qi7.js";import"./ItemMedia-BZfNDLpv.js";import"./Avatar-BseCFng7.js";import"./AvatarGroup-DlioajxJ.js";import"./ChevronUp-DzbOnysK.js";import"./ChevronDown-DI9j-k90.js";import"./ChevronRight-C-B7qVOy.js";import"./ItemBase-CkWChTpa.js";import"./ItemLink-nv4hDnw7.js";import"./ItemControls-DCzps0Gu.js";import"./Badge-C5qbsRzf.js";import"./Tooltip-BIlU6ctt.js";import"./Typography-B5wbJTRa.js";import"./useHighlightedText-Ds75xSSg.js";import"./ContextMenu-Btl7LJ1G.js";import"./useDropdownMenuController-QhPAjtom.js";import"./Dropdown-1f1KBVL6.js";import"./SearchField-DBcXR3Pi.js";import"./FieldBase-B0oEW9Tf.js";import"./Field-BVh1vOLY.js";import"./Label-CCaZkUUa.js";import"./Input-DOMevMNG.js";import"./MenuListItem-DYFDVXHn.js";import"./MenuListDivider-CKbzfKKF.js";import"./MenuListHeading-CawXvXz1.js";import"./MenuItem-CTnwjskA.js";import"./Checkmark-DdndXx_3.js";import"./ItemLabel-DZZbZME8.js";import"./InformationSquare-DxoPvZKH.js";import"./MenuElipsisHorizontal-B8s7-qPg.js";import"./Pencil-B4Gi9skh.js";import"./SkipLink-QM0bjGuE.js";import"./Banner-C0Hd_jRO.js";import"./GlobalHeader-Bl34Zeq_.js";import"./useIsDesktop-CM3JNpdH.js";import"./GlobalAccountButton-16F7-rtH.js";import"./Enter-CwR9nqj6.js";import"./GlobalMenuButton-B2zB_jOq.js";import"./MenuHamburger-Cqp41b9X.js";import"./AccountSelector-BwZs8_Os.js";import"./Switch-DbxkCHqQ.js";import"./AccountMenu-CAM2BVUh.js";import"./GlobalMenu-DuSUiJwD.js";import"./ArrowUndo-GzL63ye6.js";import"./Globe-CDPZ8tgx.js";import"./BreadcrumbsLink-BFannjV9.js";import"./ArrowRight-Dfde_Sa9.js";import"./Footer-rr-3Gc9e.js";import"./Flex-BBjiPxTz.js";import"./ButtonGroup-B2X4F04D.js";import"./ButtonGroupDivider-CjMImbLT.js";import"./ChevronUpDown-BjdY3GXv.js";import"./ToolbarMenu-D_xI_DBF.js";import"./ToolbarSearch-Cq6Dydst.js";import"./SettingsModal-CRoAK6Cz.js";import"./ModalBody-DN8l4H7v.js";import"./Section-BBG26hDa.js";import"./ButtonIcon-B8rfoecA.js";import"./ButtonLabel-De0xiolO.js";import"./TextField-jtg2S-WL.js";import"./inboxMenu-7taXO48a.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    items: accountItems,
    groups: accountGroups,
    currentAccount
  } = useAccountMenu({
    includeGroups: true
  });
  const {
    expandedId,
    onClose,
    groups,
    items,
    search
  } = useBookmarks({
    grouped: false
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar accountMenu={{
        label: currentAccount?.title,
        items: accountItems,
        groups: accountGroups,
        searchable: true
      }} search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const layout = useInboxLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const layout = useProfileLayout({
    pageId: 'bookmarks'
  });
  const {
    expandedId,
    onClose,
    items,
    search,
    groups
  } = useBookmarks({
    grouped: true
  });
  const modalProps = expandedId && items.find(item => item.id === expandedId);
  return <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Bokmerker</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && <BookmarkModal {...modalProps} title="Rediger lagret søk" open={expandedId !== ''} onClose={onClose} buttons={[{
        label: 'Lagre',
        onClick: () => onClose()
      }, {
        label: 'Slett',
        variant: 'outline',
        onClick: () => onClose()
      }]} />}
      </PageBase>
    </Layout>;
}`,...u.parameters?.docs?.source}}};const ke=["InboxSingleAccount","InboxAllAccounts","BookmarkSettings"];export{u as BookmarkSettings,d as InboxAllAccounts,l as InboxSingleAccount,ke as __namedExportsOrder,ge as default};
