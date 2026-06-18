import{a7 as o}from"./iframe-3eub8g81.js";import{u as S}from"./useProfileLayout-DpnG_u1s.js";import{u as c,B as g}from"./useBookmarks-gxHuFK_U.js";import{L as k}from"./Layout-B8rl3WFn.js";import{P as x}from"./PageBase-CjagO44q.js";import{H as p}from"./Heading-Cn9WCavo.js";import{T as b}from"./Toolbar-BvyEDRF2.js";import{B as I}from"./BookmarkModal-CpZGsp46.js";import{u as h}from"./useInboxLayout-DW8NzIX4.js";import{u as f}from"./useAccountMenu-Bp6IDqFX.js";import"./preload-helper-PPVm8Dsz.js";import"./HeartFill-DBdzvLtg.js";import"./Bell-Bdf0yfbC.js";import"./Bookmark-BrF0TmJU.js";import"./ClockDashed-hSXEbS1C.js";import"./globalMenu-CJwUwGIy.js";import"./PersonCircle-CcWLSde1.js";import"./Buildings2-CcrzKN1f.js";import"./InboxFill-CV2hcl9g.js";import"./MenuGrid-Bs34ZRtK.js";import"./MagnifyingGlass-BjeT7HiQ.js";import"./accountMenu-igEcHo93.js";import"./getAccount-CV-w7tgU.js";import"./Archive-DyLG6tnj.js";import"./Trash-BuKvObXQ.js";import"./useLayout-8UgOPf0A.js";import"./useLocale-Dy532l4o.js";import"./header-BSG0hLSn.js";import"./footer-C_FbMSyz.js";import"./skipLink-a-xnxnVi.js";import"./settlingsList.module-DvhJJNuI.js";import"./useMenu-DENMRGmJ.js";import"./BookmarkSettingsItem-CbGEGd0K.js";import"./QueryLabel-CYu5-yfM.js";import"./Plus-BNfQnDLY.js";import"./SettingsItemBase-B1tn_cXi.js";import"./ItemMedia-BB_XOZ97.js";import"./Avatar-CwYCtPFD.js";import"./AvatarGroup-5atDHYqT.js";import"./ChevronUp-B-pU4SPo.js";import"./ChevronDown-ByzAyPe6.js";import"./ChevronRight-BS_VcXFa.js";import"./ItemBase-Dkp179g5.js";import"./ItemLink-BMVyW3FY.js";import"./ItemControls-DXPiBYKt.js";import"./Badge-CMPSGpEc.js";import"./Tooltip-egZN2oaV.js";import"./Typography-BfGFMo_X.js";import"./useHighlightedText-D_KrHTcm.js";import"./ContextMenu-y8zF4E0Z.js";import"./useDropdownMenuController-F3dY1VLA.js";import"./Dropdown-D34Rh-FK.js";import"./SearchField-DQomiBHs.js";import"./FieldBase-C1gDTj8R.js";import"./Field-BEYcEfWR.js";import"./Label-Dn1DYcv0.js";import"./Input-C_lNMvAW.js";import"./MenuListItem-kYkVg98b.js";import"./MenuListDivider-Bx6VzZCp.js";import"./MenuListHeading-lAZfEwXv.js";import"./MenuItem-CSF12lCK.js";import"./Checkmark-CY-7WOxt.js";import"./ItemLabel-CEuTRmIa.js";import"./InformationSquare-CORGNNV5.js";import"./MenuElipsisHorizontal-C9pt0hzq.js";import"./Pencil-d8zsJ0Y2.js";import"./SkipLink-Dr_ESesV.js";import"./Banner-Ctn2nm5g.js";import"./GlobalHeader-CM-mKTys.js";import"./useIsDesktop-85ERKH5L.js";import"./GlobalAccountButton-DKPiMzOb.js";import"./Enter-CvCu2dAb.js";import"./GlobalMenuButton-CKB-x1rg.js";import"./MenuHamburger-CbSlFFZF.js";import"./AccountSelector-OSLyMiiK.js";import"./Switch-CuP7DJRF.js";import"./AccountMenu-CNbXUl8V.js";import"./GlobalMenu-Dz-l5-L4.js";import"./ArrowUndo-N8aO_0gv.js";import"./Globe-CgKM5q3K.js";import"./BreadcrumbsLink-DObLHpyG.js";import"./ArrowRight-Buj25L3x.js";import"./Footer-DyrqFXgR.js";import"./Flex-DeWs0m9L.js";import"./ButtonGroup-D2aDB7np.js";import"./ButtonGroupDivider-CcfY_W-p.js";import"./ChevronUpDown-YFoeVuKi.js";import"./ToolbarMenu-D0u9Ba_c.js";import"./ToolbarSearch-BjmRNzox.js";import"./SettingsModal-DHKl9XyW.js";import"./ModalBody-BLJZdTz1.js";import"./Section-B8LCASv-.js";import"./ButtonIcon-CTN-ygEI.js";import"./ButtonLabel-DAR0S7-w.js";import"./TextField-CaFL3_rZ.js";import"./inboxMenu-B8XAZwPF.js";const ge={title:"Bookmarks/Demo",tags:["beta"],parameters:{layout:"fullscreen"}},l=()=>{const m=h({pageId:"bookmarks"}),{items:e,groups:t,currentAccount:s}=f({includeGroups:!0}),{expandedId:r,onClose:i,groups:n,items:a,search:C}=c({grouped:!1}),L=r&&a.find(B=>B.id===r);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{accountMenu:{label:s?.title,items:e,groups:t,searchable:!0},search:C}),o.jsx(g,{items:a,groups:n}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),r&&o.jsx(I,{...L,title:"Rediger lagret søk",open:r!=="",onClose:i,buttons:[{label:"Lagre",onClick:()=>i()},{label:"Slett",variant:"outline",onClick:()=>i()}]})]})})},d=()=>{const m=h({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Lagrede søk"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})},u=()=>{const m=S({pageId:"bookmarks"}),{expandedId:e,onClose:t,items:s,search:r,groups:i}=c({grouped:!0}),n=e&&s.find(a=>a.id===e);return o.jsx(k,{...m,children:o.jsxs(x,{children:[o.jsx(p,{size:"xl",children:"Bokmerker"}),o.jsx(b,{search:r}),o.jsx(g,{items:s,groups:i}),o.jsx(p,{size:"xs",weight:"normal",children:"Sist oppdatert 14. april 2025"}),e&&o.jsx(I,{...n,title:"Rediger lagret søk",open:e!=="",onClose:t,buttons:[{label:"Lagre",onClick:()=>t()},{label:"Slett",variant:"outline",onClick:()=>t()}]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
